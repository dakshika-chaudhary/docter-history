import React from 'react'
import Image from 'next/image'
import patientimage from '@/public/patientimage.jpg'
import body from '@/public/body.jpg'
import download from '@/public/download.png'
function page() {
  return (
    <div className="bg-gray-200 p-20">
        <div className="bg-white ">
    <div className="flex justify-around">
        <div className="flex flex-col gap-10 p-16">
            <Image src={patientimage} height="200" width="500"></Image>
            <p className="text-6xl ml-16 text-blue-500">{'Dr.Alexander'}</p>
            <p className="text-3xl ml-16 -mt-8">Hospital={'XYZ Hospital'}</p>
            
        <p className="text-3xl ml-16 -mt-8">{'MBBS,MS'}</p>
        <p className="text-xl ml-14 -mt-3">"Have {'12'} years of experience of dealing with complex<br></br>  cases along with satisfying patient." </p>

        <p className="text-2xl text-red-400 ml-14 -mt-3">Next-Checkup={'01/03/20XX'}</p>
</div>
        <div className="p-16 ">
        <div className='border-4 border-black'>
            <p className="text-4xl text-center"><b className="p-10">Prescription</b></p>
        <Image src={download} height="400" width="500"></Image>
        </div>
    </div>
    </div>
    </div>
<hr></hr>
    <div className="bg-white  p-12">
        <p className="text-4xl text-center text-blue-500"><u>Follow-Below-Mentioned</u></p>
        <div className=" flex justify-around font-semibold rounded-e-3xl shadow-lg rounded-s-3xl">
            <div className="p-8 mb-4 rounded-e-3xl shadow-lg rounded-s-3xl">
        <p className="text-3xl ">Prescribed-Medicine</p>
        <p className="mt-8 text-2xl text-gray-500 text-center">{'Medicine-1'}</p>
        <p className="mt-8 text-center text-2xl text-gray-500">{'Medicine-1'}</p>
        <p className="mt-8  text-center text-2xl text-gray-500">{'Medicine-1'}</p>
        </div>
        <div className="p-8 mb-4 rounded-e-3xl shadow-lg rounded-s-3xl">
        <p className="text-3xl">Precautions</p>
        <p className="mt-8 text-2xl text-gray-500 text-center">{'Precaution-1'}</p>
        <p className="mt-8 text-center text-2xl text-gray-500">{'Precaution-1'}</p>
        <p className="mt-8  text-center text-2xl text-gray-500">{'Precaution-1'}</p>
        </div>
        
        <div className="p-8  mb-4 rounded-e-3xl shadow-lg rounded-s-3xl">
        <p className="text-3xl">Other-Precautions</p>
        <p className="mt-8 text-2xl text-gray-500 text-center">{'Precaution-1'}</p>
        <p className="mt-8 text-center text-2xl text-gray-500">{'Precaution-2'}</p>
        <p className="mt-8 text-center text-2xl text-gray-500">{'Precaution-3'}</p>
        </div>
        
       
        </div>
        <hr></hr>
       
       <div className="p-10 rounded-e-3xl shadow-lg rounded-s-3xl">
       <div className="bg-white p-10 rounded-e-3xl rounded-s-3xl">
        <p className="text-4xl text-center text-blue-500"><u>Prescriptions & Reports</u></p>
        <div className=" flex justify-around font-semibold ">
            <div className="p-8 rounded-e-3xl shadow-lg rounded-s-3xl">
        <p className="text-3xl p-8">Patient-body</p>
        <Image src={body} height="200" width="500" ></Image>
        </div>
        <div className="p-8 rounded-e-3xl shadow-lg rounded-s-3xl">
        <p className="text-3xl p-8">Current-Prescription</p>
        <Image src={download} height="200" width="500"></Image>
        </div>
        
       
        
       
        </div>
     </div></div>

    </div>
    <hr></hr>
    <div className="bg-white p-12 shadow-lg">
        <p className="text-4xl text-center text-blue-500"><u>Medicines</u></p>
        <div className=" flex justify-around font-semibold rounded-e-3xl shadow-lg rounded-s-3xl">
            <div className="p-8 mb-4 rounded-e-3xl shadow-lg rounded-s-3xl">
        <p className="text-3xl ">Basic Information</p>
        <p className="mt-8 text-center text-2xl  text-gray-500">weight={'52'} kgs</p>
        <p className="mt-8 text-center text-2xl text-gray-500">height={'160'} cms</p>
        <p className="mt-8  text-center text-2xl text-gray-500">Age={'42'} years</p>
        </div>
        <div className="p-8 mb-4 rounded-e-3xl shadow-lg rounded-s-3xl">
        <p className="text-3xl">Symptoms</p>
        <p className="mt-8 text-2xl text-gray-500 text-center">Symptom-1</p>
        <p className="mt-8 text-center text-2xl text-gray-500">Symptom-2</p>
       
        <p className="mt-8  text-center text-2xl text-gray-500">Symptom-3</p>
        </div>
        
        <div className="p-8 mb-4 rounded-e-3xl shadow-lg rounded-s-3xl">
        <p className="text-3xl">Supplementary-Medicine</p>
        <p className="mt-8 text-2xl text-gray-500 text-center">Supplement-1</p>
        <p className="mt-8 text-center text-2xl text-gray-500">Supplement-2</p>
        <p className="mt-8  text-center text-2xl text-gray-500">Supplement-3</p>
        </div>
        
       
        </div></div>
<hr>
</hr>
    <div className="bg-white p-12 shadow-lg">
        <p className="text-4xl text-center text-blue-500"><u>Ex-Docters</u></p>
        <div className=" flex justify-around font-semibold rounded-e-3xl shadow-lg rounded-s-3xl">
            <div className="p-8 mb-4 rounded-e-3xl shadow-lg rounded-s-3xl">
            <Image src={patientimage} height="200" width="500"></Image>
        <p className="mt-8 text-center text-2xl  text-gray-500">Dr.Docter-1</p>
        <p className="mt-8 text-center text-2xl text-gray-500">xyz-Hospital</p>
        <p className="mt-8  text-center text-2xl text-gray-500"></p>
        </div>
        <div className="p-8 mb-4 rounded-e-3xl shadow-lg rounded-s-3xl">
        <Image src={patientimage} height="200" width="500"></Image>
        <p className="mt-8 text-2xl text-gray-500 text-center">Dr.Docter-2</p>
        <p className="mt-8 text-center text-2xl text-gray-500">xyz-Hospital</p>
        <p className="mt-8  text-center text-2xl text-gray-500"></p>
        </div>
        
        <div className="p-8 mb-4 rounded-e-3xl shadow-lg rounded-s-3xl">
        <Image src={patientimage} height="200" width="500"></Image>
        <p className="mt-8 text-2xl text-gray-500 text-center">Dr.Docter-3</p>
        <p className="mt-8 text-center text-2xl text-gray-500">xyz-Hospital</p>
        <p className="mt-8  text-center text-2xl text-gray-500"></p>
        </div>
        
       
        </div></div>
<hr>
</hr>

<div className="bg-white p-12 shadow-lg">
        <p className="text-4xl text-center text-blue-500"><u>Next-Checkup</u></p>
        <div className=" flex justify-around font-semibold rounded-e-3xl shadow-lg rounded-s-3xl">
            <div className="p-8 mb-4 rounded-e-3xl shadow-lg rounded-s-3xl">
        <p className="text-3xl ">Next-dates</p>
        <p className="mt-8 text-center text-2xl  text-gray-500">{'01/03/20XX'}</p>
        <p className="mt-8 text-center text-2xl text-gray-500">{'01/03/20XX'}</p>
       
        </div></div></div>
      </div>
    
  )
}

export default page;