# TFM_UOC

Ésto es una guía de los códigos empleados en el Trabajo de Fin de Máster titulado "Desarrollo y mejora de la funcionalidad de la herramienta _XICRA_: comparativa de análisis de _tRNAs_"

## XICRA

### Instalación 

La instalación de _XICRA_(https://github.com/HCGB-IGTP/XICRA) ha de hacerse en modo desarrollo:

```bash
## clone repo
git clone https://github.com/HCGB-IGTP/XICRA.git

## move to folder XICRA_pip
cd XICRA/XICRA_pip

## create conda environemt
conda env create -n XICRA -f ./devel/conda/environment.yml

## activate
conda activate XICRA

## install latest python code
pip install -r ./devel/pypi/requirements.txt
pip install -e .

## install missing software
sh ./XICRA/config/software/installer.sh
```

Para chequear si se ha realizado adecuadamente la instalción:

```bash
XICRA config
```

### Análisis de miRNA

Se adjunta el código de ejemplo de uso del análisis de miRNA:

```bash
## run XICRA example
ln -s ~/BMC_bioinformatics_paper/simulation/example/reads/

## prepare reads
XICRA prep --input reads/ --output_folder test_XICRA

## join reads
XICRA join --input test_XICRA --noTrim

## create miRNA analysis
XICRA miRNA --input test_XICRA --software miraligner sRNAbench

## explore results
ls test_XICRA/report/
```

## Obtención de datos:

Se detalla el código para obtener las muestras con SRAtoolkit. Se muestra como ejemplo la obtención de la muestra SRR12344552:

```bash
fasterq-dump --split-files SRR12344552
```

### Preparación de los datos

Es necesario adecuar las muestras descargadas para realizar el análisis de estos. Estos pasos se realizaron con los módulos de XICRA:

```bash
## prepare reads
XICRA prep --input reads/ --output_folder test_XICRA

## trimming
XICRA trimm --input --adapters_a TGGAATTCTCGGGTGCCAAGG --adapters_A GATCGTCGGACTGTAGAACTCTGAAC

## join reads
XICRA join --input test_XICRA
```

## Instalación de los softwares
 
### MINTmap

La instalacion de MINTmap (https://github.com/TJU-CMC-Org/MINTmap) se realizó con Conda:

```bash
conda install -c bioconda mintmap
```

### miRge3.0

La instalación de miRGe3.0 se tuvo que realizar en un entrono de Conda propio:

```bash
## create conda environemt
conda env create -n mirge

## activate
conda activate mirge
```

```
## install python3.8 and R
sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt install python3.8
sudo apt install python3-setuptools
sudo apt install python3-pip
sudo apt install r-base
```

```bash
conda install -c bioconda mirge
```

Así como su dependencias:

```bash
## bowtie
wget -O bowtie-1.3.0-linux-x86_64.zip https://sourceforge.net/projects/bowtie-bio/files/bowtie/1.3.0/bowtie-1.3.0-linux-x86_64.zip/download
unzip bowtie-1.3.0-linux-x86_64.zip
cd bowtie-1.3.0-linux-x86_64
pwd 
  /home/arun/software/bowtie-1.3.0-linux-x86_64
export PATH=$PATH:"/home/arun/software/bowtie-1.3.0-linux-x86_64"

## samtools
sudo apt install samtools

## RNAfold
wget “https://www.tbi.univie.ac.at/RNA/download/sourcecode/2_4_x/ViennaRNA-2.4.16.tar.gz”
cd ViennaRNA-2.4.16
sudo ./configure 
sudo make 
sudo make install

## GUI requirements
sudo ln -s /home/arun/.local/bin/miRge3.0 /usr/local/bin/miRge3.0
sudo ln -s /home/arun/.local/bin/cutadapt /usr/local/bin/cutadapt
sudo ln -s /home/arun/software/bowtie-1.3.0-linux-x86_64/bowtie /usr/local/bin/bowtie
sudo ln -s /home/arun/software/bowtie-1.3.0-linux-x86_64/bowtie-build /usr/local/bin/bowtie-build
sudo ln -s /home/arun/software/bowtie-1.3.0-linux-x86_64/bowtie-inspect /usr/local/bin/bowtie-inspect
```

### tDRmapper

La instalción de tDRmapper se realizo con Conda:

```bash
conda install -c bioconda tdrmapper
```

## Analisis de tRNA

Se muestra como ejemplo el análisis de tRNA para la muestra sRR12344552

### MINTmap

```bash

```

### miRGe3.0

```bash

```
### tDRmapper

```bash

```
