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
mintmapa = pd.read_csv('MINTmapAmbiguousSRR12344552.csv', sep='\t')
mintmape = pd.read_csv('MINTmapExclusiveSRR12344552.csv', sep='\t')
mirge = pd.read_csv('miRge3.0SRR12344552.csv', sep='\t')
tdrmapper = pd.read_csv('tDRmapperSRR12344552.csv', sep='\t')

# Obtanining the unique tRFs
len_mintmapa = len(mintmape)
len_mintmape = len(mintmapa)
len_mirge = len(mirge)
len_tdrmapper = len(tdrmapper)

# Obtaining the total tRFs
total_mintmapa = mintmapa['Read counts'].sum()
total_mintmape = mintmape['Read counts'].sum()
total_mirge = mirge['Read counts'].sum()
total_tdrmapper = tdrmapper['Read counts'].sum()

# Making the summary table
summary = {'Software': ['MINTmapAmbiguous', 'MINTmapExclusive', 'miRge3.0', 'tDRmapper'], 
           'Unique tRFs': [len_mintmapa, len_mintmape, len_mirge, len_tdrmapper], 
           'Total tRFs': [total_mintmapa, total_mintmape, total_mirge, total_tdrmapper]}

summary = pd.DataFrame(summary)
summary = summary.set_index('Software')

# Saving the summary table
summary.to_csv('summary.csv', sep='\t')

print("Datas summarized in summary.csv \n")

print("Comparing the tRF detection of the softwares...\n")

# Making a new data 
tRF_mintmapa = pd.DataFrame(mintmapa.iloc[:,0])
tRF_mintmape = pd.DataFrame(mintmape.iloc[:,0])
tRF_mirge = pd.DataFrame(mirge.iloc[:,0])
tRF_tdrmapper = pd.DataFrame(tdrmapper.iloc[:,0])

# Analyzing the tRF detection by the different softwares
tRF_data = pd.concat([tRF_mintmapa, tRF_mintmape, tRF_mirge, tRF_tdrmapper])
tRF_unique = tRF_data.drop_duplicates()

print("tRFs detected by all the softwares:", len(tRF_unique))

tRF = len(tRF_data) - len(tRF_unique)

print("Duplicated tRFs: ", tRF)

print("\nMaking the matrix espression data...\n")

# Making the matrix espression data

# Making the matrix espression data for MINTmap Ambiguous
a = {}

k = 0

for i in tRF_unique['tRF sequence']:
    k += 1
    for j in tRF_mintmapa['tRF sequence']:
        if i == j:
            a[k] = "1"
            break
        else:
            a[k] = "0" 

espression_mintmapa = pd.DataFrame.from_dict(a, orient='index', columns=['MINTmap'])
espression_mintmapa = list(espression_mintmapa['MINTmap'])

# Making the matrix espression data for MINTmap Exclusive
b = {}

k = 0

for i in tRF_unique['tRF sequence']:
    k += 1
    for j in tRF_mintmape['tRF sequence']:
        if i == j:
            b[k] = "1"
            break
        else:
            b[k] = "0" 

espression_mintmape = pd.DataFrame.from_dict(b, orient='index', columns=['MINTmap'])
espression_mintmape = list(espression_mintmape['MINTmap'])

# Making the matrix espression data for miRge3.0
c = {}

k = 0

for i in tRF_unique['tRF sequence']:
    k += 1
    for j in tRF_mirge['tRF sequence']:
        if i == j:
            c[k] = "1"
            break
        else:
            c[k] = "0" 

espression_mirge = pd.DataFrame.from_dict(c, orient='index', columns=['miRge3.0'])
espression_mirge = list(espression_mirge['miRge3.0'])

# Making the matrix espression data for tDRmapper
c = {}

k = 0

for i in tRF_unique['tRF sequence']:
    k += 1
    for j in tRF_tdrmapper['tRF sequence']:
        if i == j:
            d[k] = "1"
            break
        else:
            d[k] = "0" 

espression_tdrmapper = pd.DataFrame.from_dict(d, orient='index', columns=['tDRmapper'])

espression_tdrmapper = list(espression_tdrmapper['tDRmapper'])

# Making the matrix espression data
matrix_espression = pd.DataFrame(tRF_unique)

matrix_espression['MINTmap Ambiguous'] = espression_mintmapa
matrix_espression['MINTmap Exclusive'] = espression_mintmape
matrix_espression['miRge3.0'] = espression_mirge
matrix_espression['TDRmapper'] = espression_tdrmapper

matrix_espression = matrix_espression.set_index('tRF sequence')

# Saving the matrix espression data

matrix_espression.to_csv('matrix_espression.csv', sep='\t')

print("Matrix espresssion data saved as matrix_espression.csv \n")

# Comparing the tRF detection for the different softwares

print("Comparing the tRF detection for the different softwares...\n")

# mintmapaVSmintmape
mintmapaVSmintmape = 0

for i in tRF_mintmapa['tRF sequence']:
    for j in tRF_mintmape['tRF sequence']:
        if i == j:
            mintmapaVSmintmape  += 1
            break

# mintmapaVSmirge
mintmapaVSmirge = 0

for i in tRF_mintmapa['tRF sequence']:
    for j in tRF_mirge['tRF sequence']:
        if i == j:
            mintmapaVSmirge  += 1
            break
        
# mintmapaVStdrmapper
mintmapaVStdrmapper = 0

for i in tRF_mintmapa['tRF sequence']:
    for j in tRF_tdrmapper['tRF sequence']:
        if i == j:
            mintmapaVStdrmapper += 1
            break
            
# mintmapeVSmirge
mintmapeVSmirge = 0

for i in tRF_mintmape['tRF sequence']:
    for j in tRF_mirge['tRF sequence']:
        if i == j:
            mintmapeVSmirge  += 1
            break
        
# mintmapeVStdrmapper
mintmapeVStdrmapper = 0

for i in tRF_mintmape['tRF sequence']:
    for j in tRF_tdrmapper['tRF sequence']:
        if i == j:
            mintmapeVStdrmapper += 1
            break
            
# tdrmapperVSmirge
tdrmapperVSmirge = 0

for i in tRF_tdrmapper['tRF sequence']:
    for j in tRF_mirge['tRF sequence']:
        if i == j:
            tdrmapperVSmirge  += 1
            break
            
# mintmapaVSmintmapeVSmirge
mintmapaVSmintmapeVSmirge = 0

for i in tRF_mintmapa['tRF sequence']:
    for j in tRF_mintmape['tRF sequence']:
        for n in tRF_mirge['tRF sequence']:
            if i == j == n:
                mintmapaVSmintmapeVSmirge += 1
                break

# mintmapaVSmintmapeVStdrmapper
mintmapaVSmintmapeVStdrmapper = 0

for i in tRF_mintmapa['tRF sequence']:
    for j in tRF_mintmape['tRF sequence']:
        for n in tRF_tdrmapper['tRF sequence']:
            if i == j == n:
                mintmapaVSmintmapeVStdrmapper += 1
                break
    
# mintmapaVSmirgeVStdrmapper
mintmapaVSmirgeVStdrmapper = 0

for i in tRF_mintmapa['tRF sequence']:
    for j in tRF_mirge['tRF sequence']:
        for n in tRF_tdrmapper['tRF sequence']:
            if i == j == n:
                mintmapaVSmirgeVStdrmapper += 1
                break
                
# mintmapeVSmirgeVStdrmapper
mintmapeVSmirgeVStdrmapper = 0

for i in tRF_mintmape['tRF sequence']:
    for j in tRF_mirge['tRF sequence']:
        for n in tRF_tdrmapper['tRF sequence']:
            if i == j == n:
                mintmapeVSmirgeVStdrmapper += 1
                break

# mintmapaVSmintmapeVSmirgeVStdrmapper
mintmapaVSmintmapeVSmirgeVStdrmapper = 0

# Making the comparation data
comparation = {'Comparation': ['MINTmap Ambiguous VS MINTmap Exclusive', 'MINTmap Ambiguous VS miRge3.0', 
'MINTmap Ambiguous VS tDRmapper', 'MINTmap Exclusive VS miRge3.0', 'MINTmap Exclusive VS tDRmapper',
'MINTmap Ambiguous VS MINTmap Exclusive VS miRge3.0', 'MINTmap Ambiguous VS miRge3.0 VS tDRmapper',
'MINTmap Exclusive VS miRge3.0 VS tDRmapper', 'MINTmap Ambiguous VS MINTmap Exclusive VS miRge3.0 VS tDRmapper'], 
	   'tRFs in common': [mintmapaVSmintmape, mintmapaVSmirge, mintmapaVStdrmapper, mintmapeVSmirge, 
           mintmapeVStdrmapper, mintmapaVSmintmapeVSmirge, mintmapaVSmintmapeVStdrmappper, mintmapeVSmirgeVStdrmapper,
           mintmapaVSmintmapeVSmirgeVStdrmapper]}
comparation = pd.DataFrame(comparation)
comparation = comparation.set_index('Comparation')

# Saving the comparation data
comparation = comparation.to_csv('comparation.csv', sep='\t')

print("Comparation table saved as comparation.csv \n")

print("\n\n************* Finish *************\n\n")


