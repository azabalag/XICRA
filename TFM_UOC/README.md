# TFM_UOC

Ésto es una guía de los códigos empleados en el Trabajo de Fin de Máster titulado "Desarrollo y mejora de la funcionalidad de la herramienta _XICRA_: comparativa de análisis de _tRNAs_"

## XICRA

### Instalación 

La instalación de [_XICRA_] (https://github.com/HCGB-IGTP/XICRA) ha de hacerse en modo desarrollo:

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
