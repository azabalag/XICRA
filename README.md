#######################################################################
  NAME: fromRaw_to_isomiR
  VERSION: 0.5
  AUTHORS: Antonio Luna de Haro (v0.1 & Jose F Sanchez-Herrero (v1.
           Copyright (C 2018-2019 Lauro Sumoy Lab, IGTP, Spain
#########################################################################

DESCRIPTION:
-This is a pipeline generated for the analysis of paired-end or single end reads from small RNA-seq data.
- Available analysis are:
	+ General:
	+ Trimming using Cutadapt
	+ Merge paired-end reads using FastqJoin
	+ RNA Biotype analysis using STAR.
	+ Small RNA seq:
		+ miRNA-isomiR analysis using sRNAtoolbox 
		+ tRFs using MINTmap and MINTbase.
		+ piRNA using PILFER
		