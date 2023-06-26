import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const index = () => {

    const ArrMenu = useState([
        {
            id: 0,
            title: "Portfolio"
        },

        {
            id: 1,
            title: "Products"
        },

        {
            id: 2,
            title: "ComPany"
        },
    ])

    return (
        <>
            <nav className="navbar">
                <div className="navbar__container" bis_skin_checked={1}>
                    <input id="siteMap" type="checkbox" />
                    <label htmlFor="siteMap" onclick="toggleMenu()" id="myBtn" className="navbar__container__hambuger">
                        <div className="hambuger-button" bis_skin_checked={1}><span /> <span /> <span />
                            <span />
                        </div>
                    </label>
                    <div className="main-content" bis_skin_checked={1}>
                        <div className="container container--full-width container--flex container--flex--space-between" bis_skin_checked={1}>
                            <div className="logo-container" bis_skin_checked={1}>
                                <Link className="logo" href="/"><img src="https://ntq.com.vn/media/kd8KDpXRQJarFIIkPlvX" alt="NTQ SOLUTION" /></Link>
                            </div>
                            <div className="menu-container" bis_skin_checked={1}>
                                <ul className="menu">
                                    <li className="menu__item menu__item--main">
                                        <Link className="menu__item__link menu__item__expandable-link" href="/Product" id="r-and-d-option" bis_skin_checked={1}>Products</Link>
                                    </li>
                                    <li className="menu__item menu__item--main">
                                        <Link className="menu__item__link menu__item__expandable-link" href="/Company" id="r-and-d-option" bis_skin_checked={1}>Company</Link>
                                    </li>
                                    <li className="menu__item menu__item--main"> <span className="menu__item__expandable-link" id="insight-option">Insight</span> </li>
                                    <li className="menu__item menu__item--search">
                                        <div className="search-box" onclick="toggleSearch()" bis_skin_checked={1}>
                                            <input id="search-box" className="input" placeholder="Keyword" data-listener-added_136e825a="true" />
                                            <div className="btn search" bis_skin_checked={1}><img className="fa fa-search" src="https://ntq.com.vn/website/2022/11/assets/search.8c369f.png" alt="youtube" /> <img className="fa fa-search-active" src="https://ntq.com.vn/website/2022/11/assets/search-active.df2152.png" alt="youtube" /></div>
                                            <div className="btn arrow" id="arrow_search" bis_skin_checked={1}><i className="fa fa-arrow-right" aria-hidden="true" /></div><input type="checkbox" id="toggle" />{/* <label for="toggle">close overlay</label> */}
                                        </div>
                                    </li>
                                    <li className="menu__item"><a className="button button--primary custom-button-contact" href="/contact-us/" bis_skin_checked={1}> Contact us </a></li>
                                    <li className="menu__item menu__item--language"><span className="current-language"><span className="current-language__text">EN</span><i className="material-icons current-language__icon current-language__icon--expand">expand_more</i>
                                        <i className="material-icons current-language__icon current-language__icon--collapse">expand_less</i></span>
                                        <div className="language-dropdown" bis_skin_checked={1}> <a href="https://kr.ntq.com.vn/" className="language-dropdown__option" bis_skin_checked={1}> KR </a> <a href="https://jp.ntq.com.vn/" className="language-dropdown__option" bis_skin_checked={1}> JP </a> <a href="https://ntq.com.hk/?utm_source=ntqsolution&utm_medium=language" className="language-dropdown__option" bis_skin_checked={1}> ZH </a> </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div><input id="mobileMenu" type="checkbox" /> <label htmlFor="mobileMenu" className="mobile-hambuger">
                        <div className="hambuger-button hambuger-button--mobile" bis_skin_checked={1}><span /> <span />
                            <span /> <span />
                        </div>
                    </label>
                </div>
                <div className="navbar__mobile-menu" bis_skin_checked={1}>
                    <div className="mask-navbar container container--full-width container--flex container--flex--space-between" bis_skin_checked={1}>
                        <div className="logo-container" bis_skin_checked={1}><a className="logo" href="/"><img className="logo" src="https://ntq.com.vn/media/DoNX8qOhRRaEZCDVbfOm" alt="NTQ SOLUTION" /></a></div>
                    </div>
                    <div className="mobile-menu" bis_skin_checked={1}>
                        <div className="mobile-menu__option container container--full-width mobile-menu__item--search" bis_skin_checked={1}>
                            <div className="search-box" bis_skin_checked={1}><input className="input" placeholder="What are you looking for?" />
                                <div className="btn search" bis_skin_checked={1}><img className="fa fa-search fa-search-mobile" src="/website/2022/11/assets/search-mobile.f485d8.png" alt="youtube" /></div>
                                <div className="btn arrow" bis_skin_checked={1}><i className="fa fa-arrow-right" aria-hidden="true" />
                                </div><input type="checkbox" id="toggle" /> <input id="mobileMenu" type="checkbox" /> <label htmlFor="mobileMenu" className="custom-menu">
                                    <div className="hambuger-button hambuger-button--mobile " bis_skin_checked={1}><span />
                                        <span /> <span /> <span />
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="mobile-menu__option" bis_skin_checked={1}>
                            <div className="mobile-menu__option__expandable" bis_skin_checked={1}>
                                <div className="container container--full-width display-text" bis_skin_checked={1}>
                                    <span>Services</span><span className="material-icons display-text__expand-icon">expand_more</span> <span className="material-icons display-text__collapse-icon">expand_less</span>
                                </div>
                                <div className="expand-area" bis_skin_checked={1}> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--child" href="/business-technology-consulting/" bis_skin_checked={1}>Business Technology
                                    Consulting</a>
                                    <div className="container container--full-width mobile-menu__option__link mobile-menu__option__link--child display-text-child" bis_skin_checked={1}><span>Software Development</span><span className="material-icons display-text-child__expand-icon">expand_more</span> <span className="material-icons display-text-child__collapse-icon">expand_less</span></div>
                                    <div className="expand-area-child" bis_skin_checked={1}> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--grand-child" href="/system-integration/" bis_skin_checked={1}> System Integration </a> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--grand-child" href="/enterprise-software-development/" bis_skin_checked={1}> Enterprise Software
                                        Development </a> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--grand-child" href="/website-application/" bis_skin_checked={1}> Website Application Development
                                        </a> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--grand-child" href="/mobile-application/" bis_skin_checked={1}> Mobile Application Development
                                        </a> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--grand-child" href="/cloud-based-service/" bis_skin_checked={1}> Cloud based service </a> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--grand-child" href="/dedicated-development-team/" bis_skin_checked={1}> Dedicated Development Team
                                        </a> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--grand-child" href="/ux-ui-design/" bis_skin_checked={1}> UX/UI Design </a> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--grand-child" href="/qa-testing/" bis_skin_checked={1}> QA Testing </a> </div>
                                    <div className="container container--full-width mobile-menu__option__link mobile-menu__option__link--child display-text-child" bis_skin_checked={1}><span>New Technologies</span><span className="material-icons display-text-child__expand-icon">expand_more</span> <span className="material-icons display-text-child__collapse-icon">expand_less</span></div>
                                    <div className="expand-area-child" bis_skin_checked={1}> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--grand-child" href="/artificial-intelligence-service/" bis_skin_checked={1}> AI/Machine Learning
                                    </a> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--grand-child" href="/internet-of-things/" bis_skin_checked={1}> IoT </a> </div> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--child" href="/maintenance-services/" bis_skin_checked={1}>Maintenance and Support</a>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-menu__option" bis_skin_checked={1}>
                            <div className="mobile-menu__option__expandable" bis_skin_checked={1}>
                                <div className="container container--full-width display-text" bis_skin_checked={1}>
                                    <span>Industries</span><span className="material-icons display-text__expand-icon">expand_more</span> <span className="material-icons display-text__collapse-icon">expand_less</span>
                                </div>
                                <div className="expand-area" bis_skin_checked={1}> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--child" href="/bfsi/" bis_skin_checked={1}>BFSI (Bank, Finance, Insurance)</a> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--child" href="/healthcare-software-development/" bis_skin_checked={1}>Healthcare</a> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--child" href="/travel-logistics/" bis_skin_checked={1}>Travel/ Logistic</a> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--child" href="/e-commerce/" bis_skin_checked={1}>Ecommerce</a> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--child" href="/social-platform/" bis_skin_checked={1}>Social</a> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--child" href="/business-process-application/" bis_skin_checked={1}>Business Process
                                    Application</a> </div>
                            </div>
                        </div>
                        <div className="mobile-menu__option" bis_skin_checked={1}> <a className="container container--full-width mobile-menu__option__link" href="/portfolio/" bis_skin_checked={1}>Portfolio</a> </div>
                        <div className="mobile-menu__option" bis_skin_checked={1}> <a className="container container--full-width mobile-menu__option__link" href="/products/" bis_skin_checked={1}>Products</a> </div>
                        <div className="mobile-menu__option" bis_skin_checked={1}>
                            <div className="mobile-menu__option__expandable" bis_skin_checked={1}>
                                <div className="container container--full-width display-text" bis_skin_checked={1}>
                                    <span>Company</span><span className="material-icons display-text__expand-icon">expand_more</span> <span className="material-icons display-text__collapse-icon">expand_less</span>
                                </div>
                                <div className="expand-area" bis_skin_checked={1}> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--child" href="/about-us/" bis_skin_checked={1}>About Us</a> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--child" href="https://career.ntq.com.vn/" bis_skin_checked={1}>Career</a> </div>
                            </div>
                        </div>
                        <div className="mobile-menu__option" bis_skin_checked={1}>
                            <div className="mobile-menu__option__expandable" bis_skin_checked={1}>
                                <div className="container container--full-width display-text" bis_skin_checked={1}>
                                    <span>Insight</span><span className="material-icons display-text__expand-icon">expand_more</span> <span className="material-icons display-text__collapse-icon">expand_less</span>
                                </div>
                                <div className="expand-area" bis_skin_checked={1}> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--child" href="/blog/" bis_skin_checked={1}>Blog</a> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--child" href="/newsroom/" bis_skin_checked={1}>Newsroom</a> </div>
                            </div>
                        </div>
                        <div className="mobile-menu__option container container--full-width" bis_skin_checked={1}><a className="mobile-menu__option__link" href="/contact-us/" bis_skin_checked={1}>Contact us</a></div>
                        <div className="mobile-menu__option" bis_skin_checked={1}>
                            <div className="mobile-menu__option__expandable" bis_skin_checked={1}>
                                <div className="container container--full-width display-text" bis_skin_checked={1}>
                                    <span>LANGUAGES</span> <span className="material-icons display-text__expand-icon">expand_more</span> <span className="material-icons display-text__collapse-icon">expand_less</span>
                                </div>
                                <div className="expand-area" bis_skin_checked={1}> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--child" href="https://kr.ntq.com.vn/" bis_skin_checked={1}>Korean</a> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--child" href="https://jp.ntq.com.vn/" bis_skin_checked={1}>Japanese</a> <a className="container container--full-width mobile-menu__option__link mobile-menu__option__link--child" href="https://ntq.com.hk/?utm_source=ntqsolution&utm_medium=language" bis_skin_checked={1}>Simplified Chinese</a> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar__site-map" id="navbar__site-map" bis_skin_checked={1}>
                    <div className="bottom-shadow" bis_skin_checked={1}>
                        <div className="mask-navbar container container--full-width container--flex container--flex--space-between" bis_skin_checked={1}>
                            <div className="logo-container" bis_skin_checked={1}><a className="logo" href="/"><img className="logo--primary" src="https://ntq.com.vn/media/DoNX8qOhRRaEZCDVbfOm" alt="NTQ SOLUTION" /></a></div>
                            <div className="menu-container" bis_skin_checked={1}>
                                <ul className="menu">
                                    <li className="menu__item"><a className="button button--primary" href="/contact-us/" bis_skin_checked={1}> Contact us </a></li>
                                    <li className="menu__item menu__item--language menu__item--language--mask"><span className="current-language"><span className="current-language__text">EN</span><i className="material-icons current-language__icon current-language__icon--expand">expand_more</i>
                                        <i className="material-icons current-language__icon current-language__icon--collapse">expand_less</i></span>
                                        <div className="language-dropdown language-dropdown--site-map language-dropdown--site-map--mask" bis_skin_checked={1}> <a href="https://kr.ntq.com.vn/" className="language-dropdown__option language-dropdown__option--mask" bis_skin_checked={1}> KR </a> <a href="https://jp.ntq.com.vn/" className="language-dropdown__option language-dropdown__option--mask" bis_skin_checked={1}> JP </a> <a href="https://ntq.com.hk/?utm_source=ntqsolution&utm_medium=language" className="language-dropdown__option language-dropdown__option--mask" bis_skin_checked={1}> ZH </a> </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="navbar__site-map__content container container--full-width" bis_skin_checked={1}>
                        <div className="navbar__site-map__content__grid grid grid--c4" bis_skin_checked={1}>
                            <div className="site-map-column" bis_skin_checked={1}>
                                <div className="site-map-column__heading" bis_skin_checked={1}>Services</div>
                                <div className="site-map-column__detail" bis_skin_checked={1}>
                                    <div className="site-map-item" bis_skin_checked={1}> <a className="item-link" href="/business-technology-consulting/" bis_skin_checked={1}>Business Technology
                                        Consulting</a> </div>
                                    <div className="site-map-item" bis_skin_checked={1}>
                                        <div className="item-expandable" bis_skin_checked={1}><span>Software Development</span><i className="fas fa-chevron-down item-expandable__expand-icon" /> <i className="fas fa-chevron-up item-expandable__collapse-icon" /></div>
                                        <div className="expanded-content" bis_skin_checked={1}>
                                            <div className="expanded-content__item" bis_skin_checked={1}><a className="expanded-content__item__link" href="/system-integration/" bis_skin_checked={1}>System Integration</a></div>
                                            <div className="expanded-content__item" bis_skin_checked={1}><a className="expanded-content__item__link" href="/enterprise-software-development/" bis_skin_checked={1}>Enterprise
                                                Software Development</a></div>
                                            <div className="expanded-content__item" bis_skin_checked={1}><a className="expanded-content__item__link" href="/website-application/" bis_skin_checked={1}>Website Application Development</a></div>
                                            <div className="expanded-content__item" bis_skin_checked={1}><a className="expanded-content__item__link" href="/mobile-application/" bis_skin_checked={1}>Mobile Application Development</a></div>
                                            <div className="expanded-content__item" bis_skin_checked={1}><a className="expanded-content__item__link" href="/cloud-based-service/" bis_skin_checked={1}>Cloud based service</a></div>
                                            <div className="expanded-content__item" bis_skin_checked={1}><a className="expanded-content__item__link" href="/dedicated-development-team/" bis_skin_checked={1}>Dedicated Development Team</a></div>
                                            <div className="expanded-content__item" bis_skin_checked={1}><a className="expanded-content__item__link" href="/ux-ui-design/" bis_skin_checked={1}>UX/UI Design</a></div>
                                            <div className="expanded-content__item" bis_skin_checked={1}><a className="expanded-content__item__link" href="/qa-testing/" bis_skin_checked={1}>QA Testing</a></div>
                                        </div>
                                    </div>
                                    <div className="site-map-item" bis_skin_checked={1}>
                                        <div className="item-expandable" bis_skin_checked={1}><span>New Technologies</span><i className="fas fa-chevron-down item-expandable__expand-icon" /> <i className="fas fa-chevron-up item-expandable__collapse-icon" /></div>
                                        <div className="expanded-content" bis_skin_checked={1}>
                                            <div className="expanded-content__item" bis_skin_checked={1}><a className="expanded-content__item__link" href="/artificial-intelligence-service/" bis_skin_checked={1}>AI/Machine
                                                Learning</a></div>
                                            <div className="expanded-content__item" bis_skin_checked={1}><a className="expanded-content__item__link" href="/internet-of-things/" bis_skin_checked={1}>IoT</a></div>
                                        </div>
                                    </div>
                                    <div className="site-map-item" bis_skin_checked={1}> <a className="item-link" href="/maintenance-services/" bis_skin_checked={1}>Maintenance and Support</a>
                                    </div>
                                </div>
                            </div>
                            <div className="site-map-column" bis_skin_checked={1}>
                                <div className="site-map-column__heading" bis_skin_checked={1}>Industries</div>
                                <div className="site-map-column__detail" bis_skin_checked={1}>
                                    <div className="site-map-item" bis_skin_checked={1}> <a className="item-link" href="/bfsi/" bis_skin_checked={1}>BFSI (Bank, Finance, Insurance)</a> </div>
                                    <div className="site-map-item" bis_skin_checked={1}> <a className="item-link" href="/healthcare-software-development/" bis_skin_checked={1}>Healthcare</a> </div>
                                    <div className="site-map-item" bis_skin_checked={1}> <a className="item-link" href="/travel-logistics/" bis_skin_checked={1}>Travel/ Logistic</a> </div>
                                    <div className="site-map-item" bis_skin_checked={1}> <a className="item-link" href="/e-commerce/" bis_skin_checked={1}>Ecommerce</a> </div>
                                    <div className="site-map-item" bis_skin_checked={1}> <a className="item-link" href="/social-platform/" bis_skin_checked={1}>Social</a> </div>
                                    <div className="site-map-item" bis_skin_checked={1}> <a className="item-link" href="/business-process-application/" bis_skin_checked={1}>Business Process
                                        Application</a> </div>
                                </div>
                            </div>
                            <div className="site-map-column" bis_skin_checked={1}>
                                <div className="site-map-column__heading" bis_skin_checked={1}>Products</div>
                                <div className="site-map-column__detail" bis_skin_checked={1}>
                                    <div className="site-map-item" bis_skin_checked={1}> <a className="item-link" href="/products/#enkomm" bis_skin_checked={1}>enKomm</a> </div>
                                    <div className="site-map-item" bis_skin_checked={1}> <a className="item-link" href="/products/#konia" bis_skin_checked={1}>KoniaLMS</a> </div>
                                    <div className="site-map-item" bis_skin_checked={1}> <a className="item-link" href="/products/#dentalflow" bis_skin_checked={1}>DentalFlow</a> </div>
                                    <div className="site-map-item" bis_skin_checked={1}> <a className="item-link" href="/products/#zoro-bike" bis_skin_checked={1}>Zoro Bike</a> </div>
                                    <div className="site-map-item" bis_skin_checked={1}> <a className="item-link" href="/products/#iluton" bis_skin_checked={1}>iLUTon</a> </div>
                                    <div className="site-map-item" bis_skin_checked={1}> <a className="item-link" href="/products/#shopify-solutions" bis_skin_checked={1}>Shopify Solutions</a>
                                    </div>
                                </div>
                            </div>
                            <div className="site-map-column" bis_skin_checked={1}>
                                <div className="site-map-column__heading" bis_skin_checked={1}>Company</div>
                                <div className="site-map-column__detail" bis_skin_checked={1}>
                                    <div className="site-map-item" bis_skin_checked={1}> <a className="item-link" href="https://ntq.com.vn/about-us/" bis_skin_checked={1}>About</a> </div>
                                    <div className="site-map-item" bis_skin_checked={1}> <a className="item-link" href="https://career.ntq.com.vn/" bis_skin_checked={1}>Career</a> </div>
                                    <div className="site-map-item" bis_skin_checked={1}> <a className="item-link" href="/portfolio/" bis_skin_checked={1}>Portfolio</a> </div>
                                    <div className="site-map-item" bis_skin_checked={1}> <a className="item-link" href="/blog/" bis_skin_checked={1}>Blog</a> </div>
                                    <div className="site-map-item" bis_skin_checked={1}> <a className="item-link" href="/privacy/" bis_skin_checked={1}>Privacy Statement</a> </div>
                                </div>
                            </div>
                        </div>
                        <div className="navbar__site-map__content__contact" bis_skin_checked={1}><a className="social-network-contact" href="https://www.facebook.com/NtqSolutionJsc/" target="_blank" bis_skin_checked={1}><i className="fab fa-facebook-f" /> </a><a className="social-network-contact" href="https://www.linkedin.com/company/ntq-solution-jsc/" target="_blank" bis_skin_checked={1}><i className="fab fa-linkedin-in" /></a></div>
                    </div>
                </div>
                <div className="navbar__expand-menu" bis_skin_checked={1}>
                    <div className="detail-content" id="services-option-detail" bis_skin_checked={1}>
                        <div className="detail-content__section container container--full-width" bis_skin_checked={1}>
                            <div className="detail-content__image" bis_skin_checked={1}> <img src="https://ntq.com.vn/media/KvhwE59Sb6DpCUEVvCU4" alt="services" /> </div>
                            <div className="detail-content__child-option" bis_skin_checked={1}>
                                <div className="child-option-container" style={{ gridTemplateRows: 'repeat(5,auto) 1fr' }} bis_skin_checked={1}>
                                    <div className="parent-option-title" bis_skin_checked={1}>Services</div>
                                    <div className="child-option" bis_skin_checked={1}> <a className="child-option__link" href="/business-technology-consulting/" bis_skin_checked={1}>Business Technology
                                        Consulting</a> </div>
                                    <div className="grand-child-option" bis_skin_checked={1}> </div>
                                    <div className="child-option" bis_skin_checked={1}>
                                        <div className="child-option__title" bis_skin_checked={1}> Software Development <i className="fas fa-chevron-right" /></div>
                                    </div>
                                    <div className="grand-child-option" bis_skin_checked={1}>
                                        <div className="parent-option-title" bis_skin_checked={1}>Software Development</div>
                                        <div bis_skin_checked={1}>
                                            <div className="child-option" bis_skin_checked={1}><a className="child-option__link" href="/system-integration/" bis_skin_checked={1}>System Integration</a>
                                            </div>
                                            <div className="child-option" bis_skin_checked={1}><a className="child-option__link" href="/enterprise-software-development/" bis_skin_checked={1}>Enterprise
                                                Software Development</a></div>
                                            <div className="child-option" bis_skin_checked={1}><a className="child-option__link" href="/website-application/" bis_skin_checked={1}>Website Application
                                                Development</a></div>
                                            <div className="child-option" bis_skin_checked={1}><a className="child-option__link" href="/mobile-application/" bis_skin_checked={1}>Mobile Application
                                                Development</a></div>
                                            <div className="child-option" bis_skin_checked={1}><a className="child-option__link" href="/cloud-based-service/" bis_skin_checked={1}>Cloud based service</a>
                                            </div>
                                            <div className="child-option" bis_skin_checked={1}><a className="child-option__link" href="/dedicated-development-team/" bis_skin_checked={1}>Dedicated
                                                Development Team</a></div>
                                            <div className="child-option" bis_skin_checked={1}><a className="child-option__link" href="/ux-ui-design/" bis_skin_checked={1}>UX/UI Design</a></div>
                                            <div className="child-option" bis_skin_checked={1}><a className="child-option__link" href="/qa-testing/" bis_skin_checked={1}>QA Testing</a></div>
                                        </div>
                                    </div>
                                    <div className="child-option" bis_skin_checked={1}>
                                        <div className="child-option__title" bis_skin_checked={1}> New Technologies <i className="fas fa-chevron-right" /></div>
                                    </div>
                                    <div className="grand-child-option" bis_skin_checked={1}>
                                        <div className="parent-option-title" bis_skin_checked={1}>New Technologies</div>
                                        <div bis_skin_checked={1}>
                                            <div className="child-option" bis_skin_checked={1}><a className="child-option__link" href="/artificial-intelligence-service/" bis_skin_checked={1}>AI/Machine
                                                Learning</a></div>
                                            <div className="child-option" bis_skin_checked={1}><a className="child-option__link" href="/internet-of-things/" bis_skin_checked={1}>IoT</a></div>
                                        </div>
                                    </div>
                                    <div className="child-option" bis_skin_checked={1}> <a className="child-option__link" href="/maintenance-services/" bis_skin_checked={1}>Maintenance and Support</a>
                                    </div>
                                    <div className="grand-child-option" bis_skin_checked={1}> </div>
                                    <div bis_skin_checked={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detail-content" id="industries-option-detail" bis_skin_checked={1}>
                        <div className="detail-content__section container container--full-width" bis_skin_checked={1}>
                            <div className="detail-content__image" bis_skin_checked={1}> <img src="https://ntq.com.vn/media/KvhwE59Sb6DpCUEVvCU4" alt="industries" /> </div>
                            <div className="detail-content__child-option" bis_skin_checked={1}>
                                <div className="child-option-container" style={{ gridTemplateRows: 'repeat(7,auto) 1fr' }} bis_skin_checked={1}>
                                    <div className="parent-option-title" bis_skin_checked={1}>Industries</div>
                                    <div className="child-option" bis_skin_checked={1}> <a className="child-option__link" href="/bfsi/" bis_skin_checked={1}>BFSI (Bank, Finance, Insurance)</a> </div>
                                    <div className="grand-child-option" bis_skin_checked={1}> </div>
                                    <div className="child-option" bis_skin_checked={1}> <a className="child-option__link" href="/healthcare-software-development/" bis_skin_checked={1}>Healthcare</a> </div>
                                    <div className="grand-child-option" bis_skin_checked={1}> </div>
                                    <div className="child-option" bis_skin_checked={1}> <a className="child-option__link" href="/travel-logistics/" bis_skin_checked={1}>Travel/ Logistic</a> </div>
                                    <div className="grand-child-option" bis_skin_checked={1}> </div>
                                    <div className="child-option" bis_skin_checked={1}> <a className="child-option__link" href="/e-commerce/" bis_skin_checked={1}>Ecommerce</a> </div>
                                    <div className="grand-child-option" bis_skin_checked={1}> </div>
                                    <div className="child-option" bis_skin_checked={1}> <a className="child-option__link" href="/social-platform/" bis_skin_checked={1}>Social</a> </div>
                                    <div className="grand-child-option" bis_skin_checked={1}> </div>
                                    <div className="child-option" bis_skin_checked={1}> <a className="child-option__link" href="/business-process-application/" bis_skin_checked={1}>Business Process
                                        Application</a> </div>
                                    <div className="grand-child-option" bis_skin_checked={1}> </div>
                                    <div bis_skin_checked={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detail-content" id="company-option-detail" bis_skin_checked={1}>
                        <div className="detail-content__section container container--full-width" bis_skin_checked={1}>
                            <div className="detail-content__image" bis_skin_checked={1}> <img src="https://ntq.com.vn/media/KvhwE59Sb6DpCUEVvCU4" alt="company" /> </div>
                            <div className="detail-content__child-option" bis_skin_checked={1}>
                                <div className="child-option-container" style={{ gridTemplateRows: 'repeat(3,auto) 1fr' }} bis_skin_checked={1}>
                                    <div className="parent-option-title" bis_skin_checked={1}>Company</div>
                                    <div className="child-option" bis_skin_checked={1}> <a className="child-option__link" href="/about-us/" bis_skin_checked={1}>About Us</a> </div>
                                    <div className="grand-child-option" bis_skin_checked={1}> </div>
                                    <div className="child-option" bis_skin_checked={1}> <a className="child-option__link" href="https://career.ntq.com.vn/" bis_skin_checked={1}>Career</a> </div>
                                    <div className="grand-child-option" bis_skin_checked={1}> </div>
                                    <div bis_skin_checked={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detail-content" id="insight-option-detail" bis_skin_checked={1}>
                        <div className="detail-content__section container container--full-width" bis_skin_checked={1}>
                            <div className="detail-content__image" bis_skin_checked={1}> <img src="https://ntq.com.vn/media/U6N71e67TISPvIWOXc57" alt="insight" /> </div>
                            <div className="detail-content__child-option" bis_skin_checked={1}>
                                <div className="child-option-container" style={{ gridTemplateRows: 'repeat(3,auto) 1fr' }} bis_skin_checked={1}>
                                    <div className="parent-option-title" bis_skin_checked={1}>Insight</div>
                                    <div className="child-option" bis_skin_checked={1}> <a className="child-option__link" href="/blog/" bis_skin_checked={1}>Blog</a> </div>
                                    <div className="grand-child-option" bis_skin_checked={1}> </div>
                                    <div className="child-option" bis_skin_checked={1}> <a className="child-option__link" href="/newsroom/" bis_skin_checked={1}>Newsroom</a> </div>
                                    <div className="grand-child-option" bis_skin_checked={1}> </div>
                                    <div bis_skin_checked={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default index