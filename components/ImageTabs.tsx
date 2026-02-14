'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'

const ImageTabs = () => {
      const [activeTab, setActiveTab] = useState("organize"); // organize , hired , boared

  return (
    
        <section>
          {/* Hero Images Section */}
          <section className='border-t bg-white py-16'>
            <div className='container mx-auto px-4 '>
              <div className='mx-auto max-w-6xl'>
                {/* Tabs */}
                <div className='flex gap-2 justify-center mb-8'>
                  <Button onClick={() => setActiveTab("organize")}
                    className={`rounded-lg px-6 text-sm font-medium transition-colors ${activeTab === "organize" ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700"
                      }`}
                  >Origanize Applications</Button>
                  <Button onClick={() => setActiveTab("hired")}
                    className={`rounded-lg px-6 text-sm font-medium transition-colors ${activeTab === "hired" ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700"
                      }`}
                  >Get Hired</Button>
                  <Button onClick={() => setActiveTab("boarded")}

                    className={`rounded-lg px-6 text-sm font-medium transition-colors ${activeTab === "boarded" ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700"
                      }`}
                  >Manage Boards</Button>
                </div>
                <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                  {activeTab === "organize" && (<Image src={"/hero-images/hero1.png"}
                    alt='0'
                    width={1200}
                    height={800}
                  />)}

                  {activeTab === "hired" && <Image src={"/hero-images/hero2.png"}
                    alt='0'
                    width={1200}
                    height={800} />}

                  {activeTab === "boarded" && <Image src={"/hero-images/hero3.png"}
                    alt='0'
                    width={1200}
                    height={800} />}
                </div>
              </div>
            </div>
          </section>
        </section>
  )
}

export default ImageTabs