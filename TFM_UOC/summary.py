#!/usr/bin/python

# Import useful modules

import sys
import pandas as pd
import numpy as np

############################

print("\n")
print("Summarizing arguments...\n")

total = len(sys.argv)
cmdargs = str(sys.argv)
print ("The total numbers of args passed to the script: %d \n" % total)

# Pharsing args one by one 
print ("Script name: %s" % str(sys.argv[0]))
print ("Sample: %s \n" % str(sys.argv[1]))

############################

print("Summarizing the datas...\n")

# Reading the datas
mintmap = pd.read_csv('MINTmap' + sys.argv[1] + 'csv', sep='\t')
mirge = pd.read_csv('miRge3.0' + sys.argv[1] + 'csv' sep='\t')
tdrmapper = pd.read_csv('tDRmapper' + sys.argv[1] + 'csv', sep='\t')

# Obtanining the unique tRFs
len_mintmap = len(mintmap)
len_mirge = len(mirge)
len_tdrmapper = len(tdrmapper)

# Obtaining the total tRFs
total_mintmap = mintmap['Read counts'].sum()
total_mirge = mirge['Read counts'].sum()
total_tdrmapper = tdrmapper['Read counts'].sum()

# Making the summary table
summary = {'Software': ['MINTmap', 'miRge3.0', 'tDRmapper'], 
           'Unique tRFs': [len_mintmap, len_mirge, len_tdrmapper], 
           'Total tRFs': [total_mintmap, total_mirge, total_tdrmapper]}

summary = pd.DataFrame(summary)
summary = summary.set_index('Software')

# Saving the summary table
summary.to_csv('summary_' + sys.argv[1] + '.csv', sep='\t')

print("Datas summarized in summary" + sys.argv[1] + ".csv \n")

print("\n\n************* Finish *************\n\n")


