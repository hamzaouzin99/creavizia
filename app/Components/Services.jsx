import React from 'react'
import {AiOutlineAntDesign} from 'react-icons/ai'
import {RiSeoLine} from 'react-icons/ri'
import {SiPurescript} from 'react-icons/si'
import {SiBrandfolder} from 'react-icons/si'



const Services = () => {
  return (
    <div className='relative'>
    <div id='services' className='lg:px-14 bg-black px-4    lg:flex lg:justify-between gap-6  py-36'>
        <div className='relative text-white z-20 w-full px-4 mb-10  lg:w-1/2  '>
        <div className='sticky top-5 flex justify-center gap-5 flex-col'>
        <div className='hover:bg-[#FDF0E7] cursor-pointer mt-12  w-fit  rounded-full px-4 py-1 border-2 border-white '>
        <p className='text-white hover:text-black tracking-widest '>خدمات</p>
       </div>
            <h1 className='text-5xl font-bold  tracking-wide'>ابتكارك القادم</h1>
            <p className='p w-full'></p>
        </div>
        </div>
        <div className='flex z-20 flex-col px-4 flex-1 lg:w-1/2 relative justify-center items-center gap-5'>
            <div className='bg-orange-600 text-white bg-[url("/square.svg")]  bg-left-bottom  flex flex-col  shadow-sm  gap-3 sticky top-5 p-14 rounded-lg'>
                <SiBrandfolder size={90}/>
                <h1 className='text-3xl font-bold tracking-wide '>إدارة الإعلانات في مواقع التواصل الإجتماعي</h1>
                <p className='p'>في عالم الإعلان عبر الإنترنت التنافسي، من الضروري أن تتميز وتصل إلى هدفك بفعالية. هذا هو المكان الذي تصنع فيه وكالة التسويق الرقمي لدينا كل الفرق. بفضل الخبرة المتعمقة في منصات الإعلان الرئيسية، مثل Facebook Ads وGoogle Ads، تصمم وكالة التسويق الرقمي لدينا حملات مصممة خصيصًا تجذب انتباه جمهورك المستهدف وتشركه..</p>
            </div>
            <div className='bg-[#F8F8F8] bg-[url("/square.svg")]   bg-left-bottom flex flex-col shadow-sm gap-3 sticky top-5 p-14 rounded-lg'>
                <AiOutlineAntDesign size={90}/>
                <p className='text-3xl font-bold '>التصميم الجرافيكي</p>
                <p className='p'>في عالم العلامات التجارية الواسع، لا يمكن إنكار أهمية الهوية البصرية القوية التي لا تُنسى. هذا هو المكان الذي تأتي فيه وكالة التسويق الرقمي لدينا. متخصصون في العلامات التجارية وإنشاء الهويات المرئية، يتمتع المتخصصون في وكالة التسويق الرقمي لدينا بخبرة متعمقة لتحويل مفهوم علامتك التجارية.</p>
            </div>
            <div className='bg-orange-600 text-white bg-[url("/square.svg")]  bg-left-bottom flex flex-col shadow-sm gap-3 sticky top-5 p-14 rounded-lg'>
                <SiPurescript size={90}/>
                <p className='text-3xl font-bold tracking-wide'>تطوير المواقع الإلكترونية</p>
                <p className='p'>في المشهد الرقمي اليوم، لم يعد وجود موقع على شبكة الإنترنت كافيا. من الضروري أن يكون لديك موقع متميز ومتفاعل ويتحول. هذا هو المكان الذي يأتي فيه دور وكالة التسويق الرقمي لدينا. نحن لا ننشئ مواقع الويب فحسب؛ نحن نبني الخبرات. تم تصميم منصات الويب المميزة والجذابة، التي طورتها وكالة التسويق الرقمي لدينا، لتعكس علامتك التجارية بدقة مع تلبية احتياجات المستخدمين لديك.</p>
            </div>
            <div className='bg-[#F8F8F8] bg-[url("/square.svg")]   bg-left-bottom flex flex-col shadow-sm gap-3 sticky top-10 p-14 rounded-lg'>
                <RiSeoLine size={90}/>
                <p className='text-3xl font-bold '>تحسين محركات البحث</p>
                <p className='p'>في عالم اليوم الرقمي المشبع، يعد الظهور في نتائج محركات البحث فنًا وعلمًا مشتركين، وهذا هو بالضبط ما تتفوق فيه وكالة التسويق الرقمي لدينا. لا يقوم خبراء تحسين محركات البحث (SEO) الطبيعيون في وكالة التسويق الرقمي لدينا بمتابعة الاتجاهات فحسب، بل يتوقعونها، وبالتالي يدفعون موقعك إلى أعلى التصنيفات. نحن نهدف إلى زيادة ظهورك على الإنترنت بشكل كبير، وجذب حركة المرور ذات الصلة والمؤهلة تأهيلاً عاليًا من خلال استراتيجيات قوية ومصممة بعناية.</p>
            </div>
        </div>
       
    </div>
        <div className='absolute bottom-0 left-0 z-10 w-full bg-[url("/square.svg")] bg-center  h-[420px] backdrop-opacity-90 '>

        </div>
     </div>
  )
}

export default Services