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
mintmap_ambiguous = pd.read_csv('MINTmapAmbiguous' + sys.argv[1] + '.csv', sep='\t')
mintmap_exclusive = pd.read_csv('MINTmapExclusive' + sys.argv[1] + '.csv', sep='\t')
mirge = pd.read_csv('miRge3.0' + sys.argv[1] + '.csv', sep='\t')
tdrmapper = pd.read_csv('tDRmapper' + sys.argv[1] + '.csv', sep='\t')

# Making a new data 
tRF_mintmap_ambiguous = pd.DataFrame(mintmap_ambiguous.iloc[:,0])
tRF_mintmap_exclusive = pd.DataFrame(mintmap_exclusive.iloc[:,0])
tRF_mirge = pd.DataFrame(mirge.iloc[:,0])
tRF_tdrmapper = pd.DataFrame(tdrmapper.iloc[:,0])

# Comparing the tRF detection for the different softwares

print("Comparing the tRF detection for the different softwares...\n")

# mintmapVSmirge
mintmap_ambiguousVSmirge = 0

for i in tRF_mintmap_ambiguous['tRF_sequence']:
    for j in tRF_mirge['tRF_sequence']:
        if i == j:
            mintmap_ambiguousVSmirge  += 1
            break
        
# mintmap_ambiguousVStdrmapper
mintmap_ambiguousVStdrmapper = 0

for i in tRF_mintmap_ambiguous['tRF_sequence']:
    for j in tRF_tdrmapper['tRF_sequence']:
        if i == j:
            mintmap_ambiguousVStdrmapper += 1
            break
            
# mintmap_exclusiveVSmirge
mintmap_exclusiveVSmirge = 0

for i in tRF_mintmap_exclusive['tRF_sequence']:
    for j in tRF_mirge['tRF_sequence']:
        if i == j:
            mintmap_exclusiveVSmirge  += 1
            break
        
# mintmap_exclusiveVStdrmapper
mintmap_exclusiveVStdrmapper = 0

for i in tRF_mintmap_exclusive['tRF_sequence']:
    for j in tRF_tdrmapper['tRF_sequence']:
        if i == j:
            mintmap_exclusiveVStdrmapper += 1
            break
            
# tdrmapperVSmirge
tdrmapperVSmirge = 0

for i in tRF_tdrmapper['tRF_sequence']:
    for j in tRF_mirge['tRF_sequence']:
        if i == j:
            tdrmapperVSmirge  += 1
            break
    
# mintmap_ambiguousVSmirgeVStdrmapper
mintmap_ambiguousVSmirgeVStdrmapper = 0

for i in tRF_mintmap_ambiguous['tRF_sequence']:
    for j in tRF_mirge['tRF_sequence']:
        for n in tRF_tdrmapper['tRF_sequence']:
            if i == j == n:
                mintmap_ambiguousVSmirgeVStdrmapper += 1
                break
                
# mintmap_exclusiveVSmirgeVStdrmapper
mintmap_exclusiveVSmirgeVStdrmapper = 0

for i in tRF_mintmap_exclusive['tRF_sequence']:
    for j in tRF_mirge['tRF_sequence']:
        for n in tRF_tdrmapper['tRF_sequence']:
            if i == j == n:
                mintmap_exclusiveVSmirgeVStdrmapper += 1
                break

# Making the comparation data
comparation = {'Comparation': ['MINTmap Ambiguous VS miRge3.0', 'MINTmap Ambiguous VS tDRmapper', 
'MINTmap Exclusive VS miRge3.0', 'MINTmap Exclusive VS tDRmapper', 'miRge3.0 VS tDRmapper', 
'MINTmap Ambiguous VS miRge3.0 VS tDRmapper', 'MINTmap Exclusive VS miRge3.0 VS tDRmapper'], 
	   'tRFs in common': [mintmap_ambiguousVSmirge, mintmap_ambiguousVStdrmapper, mintmap_exclusiveVSmirge, 
           mintmap_exclusiveVStdrmapper, tdrmapperVSmirge, mintmap_ambiguousVSmirgeVStdrmapper, mintmap_exclusiveVSmirgeVStdrmapper]}
comparation = pd.DataFrame(comparation)
comparation = comparation.set_index('Comparation')

# Saving the comparation data
comparation = comparation.to_csv('comparation' + sys.argv[1] + '.csv', sep='\t')

print("\n\n************* Finish *************\n\n")



