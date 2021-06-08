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
print ("Sofware: %s" % str(sys.argv[1]))
print ("Sample code: %s " % str(sys.argv[2]))
print ("Path: %s \n\n" % str(sys.argv[3]))

############################

print("Summaryzing the data...")

# Defining the function to generate the summary table
def tabla(software, sample, path):
    if (software == 'MINTmapAmbiguous' or software == 'MINTmapExclusive'):
        data = pd.read_csv(path, sep = '\t')
        resum = pd.DataFrame(data.iloc[:,[1,3]])
    elif software == 'miRge3.0':
        data = pd.read_csv(path, sep='\t')
        resum = data.iloc[:,[2,6]]
    elif software == 'tDRmapper':
        data = pd.read_csv(path, sep='\t')
        resum = data.iloc[:,[2,0]]
    else:
        print("Error")
    name = software + sample + '.csv'
    df = pd.DataFrame(resum)
    df.columns = ['tRF_sequence', 'Read_counts']
    df = df.set_index('tRF_sequence')
    df = df.sort_values('tRF_sequence')
    df = df.to_csv(name, sep='\t')

# Applying the function for our arguments
tabla(sys.argv[1], sys.argv[2], sys.argv[3])

print("\n\n************* Finish *************\n\n")

print("\n\n************* Finish *************\n\n")


