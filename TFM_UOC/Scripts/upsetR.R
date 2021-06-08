upsetR <- function(MINTmap_Ambiguous, MINTmap_Exclusive, miRge3.0, tDRmapper){
  list <- list(MINTmap_Ambiguous= c(MINTmap_Ambiguous$tRF_sequence), 
             MINTmap_Exclusive = c(MINTmap_Exclusive$tRF_sequence), 
             miRge3.0 = c(miRge3.0$tRF_sequence), 
             tDRmapper = c(tDRmapper$tRF_sequence))
  upset(fromList(list), order.by = "freq", 
      mainbar.y.label = "detected tRFs", 
      sets.x.label = "library size", 
      point.size = 3.5,
      text.scale = c(1.3, 1.5, 1.3, 1, 1.5, 1))
}