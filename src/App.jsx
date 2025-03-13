import { useState } from 'react'
import './App.css'

function App() {

  const [activeId, setActiveId] = useState('')
  const [FAQActiveId, setFAQActiveId] = useState('')

  const featuresInfo = [
    {
      id:'1',
      title:'Application Submissions',
      description:'We simplify the application process by guiding users through straightforward steps, prompting them to input relevant financial and operational information.'
    },
    {
      id:'2',
      title:'Lender Match',
      description:'We simplify the application process by guiding users through straightforward steps, prompting them to input relevant financial and operational information.'
    },
    {
      id:'3',
      title:'Deal Tracking',
      description:'We simplify the application process by guiding users through straightforward steps, prompting them to input relevant financial and operational information.'
    },
    {
      id:'4',
      title:'Team Collaboration',
      description:'We simplify the application process by guiding users through straightforward steps, prompting them to input relevant financial and operational information.'
    },
    {
      id:'5',
      title:'Notifications',
      description:'We simplify the application process by guiding users through straightforward steps, prompting them to input relevant financial and operational information.'
    },
    {
      id:'6',
      title:'Borrower Access',
      description:'We simplify the application process by guiding users through straightforward steps, prompting them to input relevant financial and operational information.'
    },
  ]
  const FAQInfo = [
    {
      id:'1',
      title:'Application Submissions',
      description:'We simplify the application process by guiding users through straightforward steps, prompting them to input relevant financial and operational information.'
    },
    {
      id:'2',
      title:'Lender Match',
      description:'We simplify the application process by guiding users through straightforward steps, prompting them to input relevant financial and operational information.'
    },
    {
      id:'3',
      title:'Deal Tracking',
      description:'We simplify the application process by guiding users through straightforward steps, prompting them to input relevant financial and operational information.'
    },
    {
      id:'4',
      title:'Team Collaboration',
      description:'We simplify the application process by guiding users through straightforward steps, prompting them to input relevant financial and operational information.'
    },
    {
      id:'5',
      title:'Notifications',
      description:'We simplify the application process by guiding users through straightforward steps, prompting them to input relevant financial and operational information.'
    },
    {
      id:'6',
      title:'Borrower Access',
      description:'We simplify the application process by guiding users through straightforward steps, prompting them to input relevant financial and operational information.'
    },
    {
      id:'7',
      title:'Borrower policy',
      description:'We simplify the application process by guiding users through straightforward steps, prompting them to input relevant financial and operational information.'
    },
    {
      id:'8',
      title:'User Access',
      description:'We simplify the application process by guiding users through straightforward steps, prompting them to input relevant financial and operational information.'
    },
  ]
  return (
    <main className='px-24 poppins-regular'>
      <nav className='sticky top-0 left-0 z-50  w-full bg-white text-sm flex justify-between items-center py-10'>
        <img
          src='/fc-logo.svg'
          alt='Funds connect logo'
        />
        <ul className='flex gap-10'>
          <li>Use Cases</li>
          <li>Features</li>
          <li>Benefits</li>
          <li>Funding Solutions</li>
        </ul>
        <div className='space-x-4 *:px-6 *:py-3 *:rounded-xl *:transition-all *:duration-200 '>
          <button className='hover:bg-black/5 '>Log-in</button>
          <button className='bg-[#08ECB3] text-white poppins-semibold hover:bg-[#07d4a1]'>Get Started</button>
        </div>
      </nav>
      <section className='mt-14 text-center flex gap-8 flex-col justify-center items-center'>
        <div className='flex gap-8 items-center text-sm py-1 px-2 rounded-full border border-black/30'>
          <div className=''>
            {
              ['','',''].map((_,i)=>(
                <img
                  key={i}
                  src='/fc-ellipse.png'
                  alt='ellipse photo'
                  className='rounded-full inline-block -mr-5'
                />
              ))
            }
          </div>
          <p><span className='poppins-bold'>200+</span> brokers are using FundsConnect</p>
        </div>
        <h1 className='text-5xl leading-14 poppins-semibold'>Empowering Australian brokers<br/> and introducers to facilitate<br/> commercial finance transactions</h1>
        <p className='text-black/50 w-[50%]'>We make loan origination easier, guaranteeing seamless client interactions, straightforward settlements, and quicker deal closures.</p>
        <button className='bg-[#08ECB3] text-white poppins-semibold px-4 py-3 rounded-xl hover:bg-[#07d4a1] transition-all duration-200'>Get started - it&apos;s free!</button>
        <div className='relative w-full flex justify-center mt-10'>
          <img 
            src='/fc-img1.png'
            alt='hero photo'
            className='border-2 border-[#eee] bg-[#eee] rounded-3xl'
          />
          <img 
            src='/fc-img2.png'
            alt='hero photo 2'
            className='absolute right-0 bottom-0 -translate-x-[15%] border-4 border-[#eee] rounded-3xl'
          />
          <div className='absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-white to-transparent'/>
        </div>
      </section>
      <section className='my-20 flex items-center justify-between'>
        <header className='w-[40%] space-y-4'>
          <div className=' w-fit bg-[#E7FEF8] text-[#08ECB3] py-3 px-4 rounded-xl'>Use Cases</div>
          <h2 className='text-[40px] poppins-semibold leading-12'>Who is FundsConnect for?</h2>
          <p className='text-black/50'>FundsConnect is built for every use case who are looking to diversify their offering by facilitating commercial finance transactions.</p>
        </header>
        <main className='grid grid-cols-2 gap-6 '>
          <div className='w-72 space-y-4 p-4 border border-black/10 rounded-xl'>
            <div className='bg-[#E7FEF8] w-fit p-2 rounded-xl'>
              <img
                src='/fc-broker-icon.png'
                alt='broker icon'
              />
            </div>
            <h3 className='poppins-medium'>Brokers</h3>
            <p className='text-black/50 text-sm'>Close deals faster, manage clients more efficiently, and stay ahead of the competition.</p>
          </div>
          <div className='w-72 space-y-4 p-4 border border-black/10 rounded-xl'>
            <div className='bg-[#E7FEF8] w-fit p-2 rounded-xl'>
              <img
                src='/fc-broker-icon.png'
                alt='broker icon'
              />
            </div>
            <h3 className='poppins-medium'>Introducers</h3>
            <p className='text-black/50 text-sm'>Diversify your offerings and facilitate successful commercial finance transactions.</p>
          </div>
          <div className='w-72 space-y-4 p-4 border border-black/10 rounded-xl'>
            <div className='bg-[#E7FEF8] w-fit p-2 rounded-xl'>
              <img
                src='/fc-broker-icon.png'
                alt='broker icon'
              />
            </div>
            <h3 className='poppins-medium'>Enterprises</h3>
            <p className='text-black/50 text-sm'>Provide your brokers with all they require for effective and seamless commercial finance deals in one unified platform.</p>
          </div>
          <div className='w-72 space-y-4 p-4 border border-black/10 rounded-xl'>
            <div className='bg-[#E7FEF8] w-fit p-2 rounded-xl'>
              <img
                src='/fc-broker-icon.png'
                alt='broker icon'
              />
            </div>
            <h3 className='poppins-medium'>Lenders</h3>
            <p className='text-black/50 text-sm'>Expand your finance products' reach to more borrowers across diverse market sectors.</p>
          </div>
          
        </main>
      </section>
      <section className='my-36 space-y-8'>
        <header className='space-y-4 text-center flex flex-col items-center'>
          <div className=' w-fit bg-[#E7FEF8] text-[#08ECB3] py-3 px-4 rounded-xl'>Features</div>
          <h2 className='text-[40px] leading-12 poppins-semibold'>Everything you would expect <br/>all in one platform</h2>
          <p className='text-black/50'>FundsConnect technology empowers users with<br/>market-leading features.</p>
        </header>
        <div className='flex justify-between gap-16'>
          <main className='flex-1 space-y-4'>
            {
              featuresInfo.map((feature,i)=>{
                const active = activeId === feature.id
                return(
                  <div key={feature.id} onClick={()=>setActiveId(p => p === feature.id ? "" : feature.id)} className='w-full p-4 rounded-xl border border-black/10'>
                    <div className='w-full flex justify-between items-center '>
                      <h3 className='poppins-medium'>{feature.title}</h3>
                      <img
                        src='/fc-chevron-down.png'
                        alt='chevron down'
                        className={`p-1 rounded-full bg-black/5 transition-all ${active && "transform rotate-180"}`}
                      />
                    </div>
                    <p className={`text-black/50 text-start text-sm ${active ? "h-16 mt-6" :"h-0"} overflow-hidden transition-all `} >{feature.description}</p>
                  </div>
                )
              })
            }
          </main>
          <div className='flex items-center rounded-xl bg-[#F8F8F8]'>
            <img 
              src='/fc-img3.png'
              alt='feature photo'
            />
          </div>
        </div>
      </section>
      <section className='my-36 space-y-14'>
        <div className='space-y-4 '>
          <div className='w-fit bg-[#E7FEF8] text-[#08ECB3] py-3 px-4 rounded-xl'>Benefits</div>
          <h2 className='text-[40px] poppins-semibold'>Why FundsConnect?</h2>
        </div>
        <main className='flex gap-8 flex-wrap justify-between'>
           <div className='w-72 space-y-4 rounded-xl'>
              <div className='bg-[#E7FEF8] w-fit p-2 rounded-xl'>
                <img
                  src='/fc-broker-icon.png'
                  alt='broker icon'
                />
              </div>
              <h3 className='poppins-medium text-lg'>Access to experienced lending managers</h3>
              <p className='text-black/50 '>Benefit from the expertise of seasoned lending managers to navigate complex finance deals.</p>
           </div>
           <div className='w-72 space-y-4 rounded-xl'>
              <div className='bg-[#E7FEF8] w-fit p-2 rounded-xl'>
                <img
                  src='/fc-broker-icon.png'
                  alt='broker icon'
                />
              </div>
              <h3 className='poppins-medium text-lg'>Access to experienced lending managers</h3>
              <p className='text-black/50 '>Benefit from the expertise of seasoned lending managers to navigate complex finance deals.</p>
           </div>
           <div className='w-72 space-y-4 rounded-xl'>
              <div className='bg-[#E7FEF8] w-fit p-2 rounded-xl'>
                <img
                  src='/fc-broker-icon.png'
                  alt='broker icon'
                />
              </div>
              <h3 className='poppins-medium text-lg'>Access to experienced lending managers</h3>
              <p className='text-black/50 '>Benefit from the expertise of seasoned lending managers to navigate complex finance deals.</p>
           </div>
           <div className='w-72 space-y-4 rounded-xl'>
              <div className='bg-[#E7FEF8] w-fit p-2 rounded-xl'>
                <img
                  src='/fc-broker-icon.png'
                  alt='broker icon'
                />
              </div>
              <h3 className='poppins-medium text-lg'>Access to experienced lending managers</h3>
              <p className='text-black/50 '>Benefit from the expertise of seasoned lending managers to navigate complex finance deals.</p>
           </div>
        </main>
      </section>
      <section className='my-36 space-y-14 flex justify-between'>
        <div className='space-y-4 '>
          <div className='w-fit bg-[#E7FEF8] text-[#08ECB3] py-3 px-4 rounded-xl'>Funding Solutions</div>
          <h2 className='text-[40px] poppins-semibold'>Funding Solutions</h2>
        </div>
        <main className='grid grid-cols-2 gap-4'>
           <div className='w-72 p-4 space-y-4 rounded-xl'>
              <div className='bg-[#E7FEF8] w-fit p-2 rounded-xl'>
                <img
                  src='/fc-broker-icon.png'
                  alt='broker icon'
                />
              </div>
              <h3 className='poppins-medium text-xl'>Business Capital</h3>
              <p className='text-black/50 text-sm '>Benefit from the expertise of seasoned lending managers to navigate complex finance deals.</p>
           </div>
           <div className='w-72 p-4 space-y-4 rounded-xl'>
              <div className='bg-[#E7FEF8] w-fit p-2 rounded-xl'>
                <img
                  src='/fc-broker-icon.png'
                  alt='broker icon'
                />
              </div>
              <h3 className='poppins-medium text-lg'>Development Finance</h3>
              <p className='text-black/50 '>Benefit from the expertise of seasoned lending managers to navigate complex finance deals.</p>
           </div>
           <div className='w-72 p-4 space-y-4 rounded-xl'>
              <div className='bg-[#E7FEF8] w-fit p-2 rounded-xl'>
                <img
                  src='/fc-broker-icon.png'
                  alt='broker icon'
                />
              </div>
              <h3 className='poppins-medium text-lg'>Construction Finance</h3>
              <p className='text-black/50 '>Benefit from the expertise of seasoned lending managers to navigate complex finance deals.</p>
           </div>
           <div className='w-72 p-4 space-y-4 rounded-xl'>
              <div className='bg-[#E7FEF8] w-fit p-2 rounded-xl'>
                <img
                  src='/fc-broker-icon.png'
                  alt='broker icon'
                />
              </div>
              <h3 className='poppins-medium text-lg'>Industry Sector Lending</h3>
              <p className='text-black/50 '>Benefit from the expertise of seasoned lending managers to navigate complex finance deals.</p>
           </div>
           <div className='w-72 p-4 space-y-4 rounded-xl'>
              <div className='bg-[#E7FEF8] w-fit p-2 rounded-xl'>
                <img
                  src='/fc-broker-icon.png'
                  alt='broker icon'
                />
              </div>
              <h3 className='poppins-medium text-lg'>Corporate Lending</h3>
              <p className='text-black/50 '>Benefit from the expertise of seasoned lending managers to navigate complex finance deals.</p>
           </div>
           <div className='w-72 p-4 space-y-4 rounded-xl'>
              <div className='bg-[#E7FEF8] w-fit p-2 rounded-xl'>
                <img
                  src='/fc-broker-icon.png'
                  alt='broker icon'
                />
              </div>
              <h3 className='poppins-medium text-lg'>Property Finance</h3>
              <p className='text-black/50 '>Benefit from the expertise of seasoned lending managers to navigate complex finance deals.</p>
           </div>
        </main>
      </section>
      <section className='my-36 flex flex-col items-center space-y-14'>
        <header className='space-y-4 text-center flex flex-col items-center'>
          <div className=' w-fit bg-[#E7FEF8] text-[#08ECB3] py-3 px-4 rounded-xl'>FAQ</div>
          <h2 className='text-[40px] leading-12 poppins-semibold'>Frequently asked questions</h2>
          <p className='text-black/50'>Have other questions? Get in touch with our team via support@fundsconnect.com.au</p>
        </header>
          <main className='relative px-16 grid grid-cols-2 place-items-start gap-6 '>
            <div className='absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-white to-transparent'/>
            {
              FAQInfo.map((feature,i)=>{
                const active = FAQActiveId === feature.id
                return(
                  <div key={feature.id} onClick={()=>setFAQActiveId(p => p === feature.id ? "" : feature.id)} className='w-full p-4 rounded-xl border border-black/10'>
                    <div className='w-full flex justify-between items-center '>
                      <h3 className='poppins-medium'>{feature.title}</h3>
                      <img
                        src='/fc-plus-icon.png'
                        alt='plus icon'
                        className={`p-1 rounded-full bg-black/5 transition-all ${active && "transform rotate-45"}`}
                      />
                    </div>
                    <p className={`text-black/50 text-start text-sm ${active ? "h-16 mt-6" :"h-0"} overflow-hidden transition-all `} >{feature.description}</p>
                  </div>
                )
              })
            }
          </main>
          <button className=' w-fit border border-black/10 text-black/50 py-3 px-4 rounded-xl'>Load more FAQs</button>

      </section>
      <section className='relative overflow-hidden my-36 bg-[#08ECB3] p-14 rounded-xl text-white'>
        <div className='w-[40%] space-y-6'>
          <h2 className='text-5xl leading-12 poppins-semibold'>Get started with FundsConnect</h2>
          <p className=''>Have other questions? Get in touch with our team via support@fundsconnect.com.au</p>
          <div className='space-x-4'>
            <button className='text-[#08ECB3] bg-white poppins-semibold px-4 py-3 rounded-xl hover:bg-[#07d4a1] transition-all duration-200'>Get started - it&apos;s free!</button>
            <button className=' px-4 py-3 rounded-xl poppins-semibold border border-white text-white '>Request demo</button>
          </div>
        </div>
        <img
          src='/fc-img1.png'
          alt='hero photo'
          className='absolute -bottom-1/2 left-full -translate-x-1/2'
        />
      </section>
      <footer className='mt-36 mb-16 flex justify-between'>
          <div className='flex-1 space-y-6'>
            <img
              src='/fc-logo.svg'
              alt='logo'
            />
            <p className='w-[30%] text-black/50 text-sm'>
            © 2024 FundsConnect Technologies Pty Ltd
            <br/><br/>
            FundsConnect provides funding solutions
            that are predominantly for business purposes
            and fall outside the NCCP legislation.
            </p>
          </div>
          <main className='flex gap-28'>
            <div className='space-y-4'>
              <h3 className='text-sm poppins-semibold'>Platform</h3>
              <ul className='space-y-3 text-black/50'>
                <li>Use Cases</li>
                <li>Features</li>
                <li>Benefits</li>
                <li>Funding Solutions</li>
              </ul>
            </div>
            <div className='space-y-4'>
              <h3 className='text-sm poppins-semibold'>Company</h3>
              <ul className='space-y-3 text-black/50'>
                <li>FAQ</li>
                <li>Support</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div className='space-y-4'>
              <h3 className='text-sm poppins-semibold'>Connect</h3>
              <ul className='space-y-3 text-black/50'>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
          </main>
      </footer>
    </main>
  )
}

export default App
