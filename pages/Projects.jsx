import React from 'react'
export default function Project() {
  return(
    <>
    <div className='projectSection container'>
      <h1 className='text-center p-5 text-4xl mb-5'>Projects</h1>
      <div className='projectContainer grid lg:grid-cols-3 justify-items-center mb-8 md:grid-cols-2 gap-4'>
      <a href='https://github.com/hridayarajbanshi/Dota-2.git' target={"_blank"}>
      <div class="max-w-sm rounded overflow-hidden shadow-lg border-r border-l">
  <img class="w-full h-60" src="dota2.png" alt="Memegenerator"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Dota-2 clone site</div>  
    <p class="text-base text-justify">
     This is a dota2 clone site just build for fun using the source from the official page of dota2.
    </p>
  </div>
  <div class="px-6 pt-3 pb-3">
    <span class="inline-block border bg-black rounded-full px-3 py-1 text-sm text-white font-semibold  mr-2 mb-2">HTML5</span>
    <span class="inline-block border bg-black text-white rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">CSS3</span>
    <span class="inline-block border rounded-full px-3 py-1 text-sm bg-black text-white font-semibold  mr-2 mb-2">Bootstrap</span>
 

  </div>
</div></a>
<a href='https://github.com/hridayarajbanshi/Quro.git' target={"_blank"}>
<div class="max-w-sm rounded overflow-hidden shadow-lg border-r border-l">
  <img class="w-full h-60" src="Screenshot 2023-07-22 162343.png" alt="Memegenerator"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 ">QURO</div>
    <p class="text-base">
     This is a website for reading and buying books online where you can login into the site and order any books you want.
    </p>
  </div>
  <div class="px-6 pt-3 pb-3">
    <span class="inline-block border rounded-full px-3 py-1 text-sm bg-black text-white font-semibold  mr-2 mb-2">HTML</span>
    <span class="inline-block border bg-black text-white rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">CSS</span>
    <span class="inline-block border rounded-full px-3 py-1 text-sm bg-black text-white font-semibold  mr-2 mb-2">Javascript</span>
  </div>
</div></a>
<a href='https://github.com/hridayarajbanshi/memeGenerator' target='_blank' rel='noreferrer'>
<div class="max-w-sm rounded-md overflow-hidden shadow-lg border-r border-l  text-dark">
  <img class="w-full h-60" src={"meme5.png"} alt="Memegenerator"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Meme Generator</div>
    <p class=" text-base">
     This is a meme generator website where you can generate meme and download it.
    </p>
  </div>
  <div class="px-6 pt-3 pb-3">
    <span class="inline-block border rounded-full px-3 py-1 text-sm bg-black text-white font-semibold mr-2 mb-2">React</span>
    <span class="inline-block border bg-black text-white rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">Tailwind</span>
    <span class="inline-block border rounded-full px-3 py-1 text-sm bg-black text-white font-semibold  mr-2 mb-2">Api</span>
  </div>
</div>
</a>
        </div>
    </div>
    </>
  )
 }