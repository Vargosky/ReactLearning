import React from 'react'

const CajaStandar = () => {
  return (
<div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-3">
  <ul> 
   	<li>Argentina</li> 
   	<li>Perú</li> 
   	<li>Chile</li> 
 </ul>

  </div>
  <div class="col-span-2">02</div>
  <div class="row-span-2 col-span-2">03</div>
</div>
  )
}

export default CajaStandar