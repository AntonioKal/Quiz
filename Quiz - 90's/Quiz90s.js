// Question One
function correct1() {
    let risultato = document.getElementById('risultato1')
    myBtn1.style.backgroundColor = 'navy'
    myBtn2.style.opacity = '0.5'
    myBtn3.style.opacity = '0.5'
    myBtn4.style.opacity = '0.5'
    risultato.textContent = "Σωστά!"
}

function falso1() {
    let risultato = document.getElementById('risultato1')
    myBtn1.style.opacity = '0.5'
    myBtn2.style.opacity = '0.5'
    myBtn3.style.opacity = '0.5'
    myBtn4.style.opacity = '0.5'
    myBtn1.style.backgroundColor = ''
    risultato.textContent = "Λάθος!"
    tryAgain1.style.display = "block"
}

function reset() {
    myBtn1.style.opacity = ''
    myBtn2.style.opacity = ''
    myBtn3.style.opacity = ''
    myBtn4.style.opacity = ''
    myBtn1.style.backgroundColor = ''
    
    myBtn9.style.opacity = ''
    myBtn10.style.opacity = ''
    myBtn11.style.opacity = ''
    myBtn12.style.opacity = ''
    myBtn11.style.backgroundColor = ''

    myBtn13.style.opacity = ''
    myBtn14.style.opacity = ''
    myBtn15.style.opacity = ''
    myBtn16.style.opacity = ''
    myBtn16.style.backgroundColor = ''

    myBtn17.style.opacity = ''
    myBtn18.style.opacity = ''
    myBtn19.style.opacity = ''
    myBtn20.style.opacity = ''
    myBtn18.style.backgroundColor = ''

    myBtn21.style.opacity = ''
    myBtn22.style.opacity = ''
    myBtn23.style.opacity = ''
    myBtn24.style.opacity = ''
    myBtn21.style.backgroundColor = ''
    myBtn24.style.backgroundColor = ''

    myBtn25.style.opacity = ''
    myBtn26.style.opacity = ''
    myBtn27.style.opacity = ''
    myBtn28.style.opacity = ''
    myBtn26.style.backgroundColor = ''

    myBtn29.style.opacity = ''
    myBtn30.style.opacity = ''
    myBtn31.style.opacity = ''
    myBtn32.style.opacity = ''
    myBtn31.style.backgroundColor = ''

    myBtn33.style.opacity = ''
    myBtn34.style.opacity = ''
    myBtn35.style.opacity = ''
    myBtn36.style.opacity = ''
    myBtn33.style.backgroundColor = ''

    myBtn37.style.opacity = ''
    myBtn38.style.opacity = ''
    myBtn39.style.opacity = ''
    myBtn40.style.opacity = ''
    myBtn38.style.backgroundColor = ''

    myBtn41.style.opacity = ''
    myBtn42.style.opacity = ''
    myBtn43.style.opacity = ''
    myBtn44.style.opacity = ''
    myBtn43.style.backgroundColor = ''

    myBtn45.style.opacity = ''
    myBtn46.style.opacity = ''
    myBtn47.style.opacity = ''
    myBtn48.style.opacity = ''
    myBtn46.style.backgroundColor = ''

    let parentDiv = document.getElementById('text2');
    parentDiv.children[1].style.opacity = ''
    parentDiv.children[0].style.opacity = ''
    parentDiv.children[2].style.opacity = ''
    parentDiv.children[3].style.opacity = ''
    parentDiv.children[1].style.backgroundColor = ''
}

// Question Two
function correct2() {
    let risultato = document.getElementById('risultato2')
    let parentDiv = document.getElementById('text2');
    parentDiv.children[1].style.backgroundColor = 'navy';
    parentDiv.children[0].style.opacity = '0.5'
    parentDiv.children[2].style.opacity = '0.5'
    parentDiv.children[3].style.opacity = '0.5'
    risultato.textContent = "Σωστά!"
}

function falso2() {
    let risultato = document.getElementById('risultato2')
    let parentDiv = document.getElementById('text2');
    parentDiv.children[1].style.opacity = '0.5'
    parentDiv.children[0].style.opacity = '0.5'
    parentDiv.children[2].style.opacity = '0.5'
    parentDiv.children[3].style.opacity = '0.5'
    parentDiv.children[1].style.backgroundColor = ''
    risultato.textContent = "Λάθος!"
    tryAgain2.style.display = 'block'
}

// Question Three
function correct3() {
    let risultato = document.getElementById('risultato3')
    myBtn9.style.opacity = '0.5'
    myBtn10.style.opacity = '0.5'
    myBtn11.style.backgroundColor = 'navy'
    myBtn12.style.opacity = '0.5'
    risultato.textContent = "Σωστά!"
}

function falso3() {
    let risultato = document.getElementById('risultato3')
    myBtn9.style.opacity = '0.5'
    myBtn10.style.opacity = '0.5'
    myBtn12.style.opacity = '0.5'
    myBtn11.style.opacity = '0.5'
    myBtn11.style.backgroundColor = ''
    risultato.textContent = "Λάθος!"
    tryAgain3.style.display = "block" }


// Question Four
    function correct4() {
        let risultato = document.getElementById('risultato4')
        myBtn13.style.opacity = '0.5'
        myBtn14.style.opacity = '0.5'
        myBtn15.style.opacity = '0.5'
        myBtn16.style.backgroundColor = 'navy'
        risultato.textContent = "Σωστά!"
    }
    
    function falso4() {
        let risultato = document.getElementById('risultato4')
        myBtn13.style.opacity = '0.5'
        myBtn14.style.opacity = '0.5'
        myBtn15.style.opacity = '0.5'
        myBtn16.style.opacity = '0.5'
        myBtn16.style.backgroundColor = ''
        risultato.textContent = "Λάθος!"
        tryAgain4.style.display = "block" }

// Question Five   
        function correct5() {
            let risultato = document.getElementById('risultato5')
            myBtn17.style.opacity = '0.5'
            myBtn18.style.backgroundColor = 'navy'
            myBtn19.style.opacity = '0.5'
            myBtn20.style.opacity = '0.5'
            risultato.textContent = "Σωστά!"
        }
        
        function falso5() {
            let risultato = document.getElementById('risultato5')
            myBtn17.style.opacity = '0.5'
            myBtn18.style.opacity = '0.5'
            myBtn18.style.backgroundColor = ''
            myBtn19.style.opacity = '0.5'
            myBtn20.style.opacity = '0.5'
            risultato.textContent = "Λάθος!"
            tryAgain5.style.display = "block" }

    // Question Six    
            function correct6() {
                let risultato = document.getElementById('risultato6')
                myBtn21.style.backgroundColor = 'navy'
                myBtn22.style.opacity = '0.5'
                myBtn23.style.opacity = '0.5'
                myBtn24.style.backgroundColor = 'navy'
                risultato.textContent = "Σωστά!"
            }
            
            function falso6() {
                let risultato = document.getElementById('risultato6')
                myBtn21.style.backgroundColor = ''
                myBtn22.style.opacity = '0.5'
                myBtn23.style.opacity = '0.5'
                myBtn24.style.opacity = '0.5'
                myBtn24.style.backgroundColor = ''
                risultato.textContent = "Λάθος!"
                tryAgain6.style.display = "block" }

    // Question Seven             
                function correct7() {
                    let risultato = document.getElementById('risultato7')
                    myBtn25.style.opacity = '0.5'
                    myBtn26.style.backgroundColor = 'navy'
                    myBtn27.style.opacity = '0.5'
                    myBtn28.style.opacity = '0.5'
                    risultato.textContent = "Σωστά!"
                }
                
                function falso7() {
                    let risultato = document.getElementById('risultato7')
                    myBtn25.style.opacity = '0.5'
                    myBtn26.style.opacity = '0.5'
                    myBtn26.style.backgroundColor = ''
                    myBtn27.style.opacity = '0.5'
                    myBtn28.style.opacity = '0.5'
                    risultato.textContent = "Λάθος!"
                    tryAgain7.style.display = "block" }

    // Question Eight                  
                    function correct8() {
                        let risultato = document.getElementById('risultato8')
                        myBtn29.style.opacity = '0.5'
                        myBtn30.style.opacity = '0.5'
                        myBtn31.style.backgroundColor = 'navy'
                        myBtn32.style.opacity = '0.5'
                        risultato.textContent = "Σωστά!"
                    }
                    
                    function falso8() {
                        let risultato = document.getElementById('risultato8')
                        myBtn29.style.opacity = '0.5'
                        myBtn30.style.opacity = '0.5'
                        myBtn31.style.opacity = '0.5'
                        myBtn31.style.backgroundColor = ''
                        myBtn32.style.opacity = '0.5'
                        risultato.textContent = "Λάθος!"
                        tryAgain8.style.display = "block" }

    // Question Nine                      
                        function correct9() {
                            let risultato = document.getElementById('risultato9')
                            myBtn33.style.backgroundColor = 'navy'
                            myBtn34.style.opacity = '0.5'
                            myBtn35.style.opacity = '0.5'
                            myBtn36.style.opacity = '0.5'
                            risultato.textContent = "Σωστά!"
                        }
                        
                        function falso9() {
                            let risultato = document.getElementById('risultato9')
                            myBtn33.style.opacity = '0.5'
                            myBtn33.style.backgroundColor = ''
                            myBtn34.style.opacity = '0.5'
                            myBtn35.style.opacity = '0.5'
                            myBtn36.style.opacity = '0.5'
                            risultato.textContent = "Λάθος!"
                            tryAgain9.style.display = "block" }

    // Question Ten                          
                            function correct10() {
                                let risultato = document.getElementById('risultato10')
                                myBtn37.style.opacity = '0.5'
                                myBtn38.style.backgroundColor = 'navy'
                                myBtn39.style.opacity = '0.5'
                                myBtn40.style.opacity = '0.5'
                                risultato.textContent = "Σωστά!"
                            }
                            
                            function falso10() {
                                let risultato = document.getElementById('risultato10')
                                myBtn37.style.opacity = '0.5'
                                myBtn38.style.opacity = '0.5'
                                myBtn38.style.backgroundColor = ''
                                myBtn39.style.opacity = '0.5'
                                myBtn40.style.opacity = '0.5'
                                risultato.textContent = "Λάθος!"
                                tryAgain10.style.display = "block" }

    // Question Eleven                              
                                function correct11() {
                                    let risultato = document.getElementById('risultato11')
                                    myBtn41.style.opacity = '0.5'
                                    myBtn42.style.opacity = '0.5'
                                    myBtn43.style.backgroundColor = 'navy'
                                    myBtn44.style.opacity = '0.5'
                                    risultato.textContent = "Σωστά!"
                                }
                                
                                function falso11() {
                                    let risultato = document.getElementById('risultato11')
                                    myBtn41.style.opacity = '0.5'
                                    myBtn42.style.opacity = '0.5'
                                    myBtn43.style.opacity = '0.5'
                                    myBtn43.style.backgroundColor = ''
                                    myBtn44.style.opacity = '0.5'
                                    risultato.textContent = "Λάθος!"
                                    tryAgain11.style.display = "block" }

    // Question Twelve                                  
                                    function correct12() {
                                        let risultato = document.getElementById('risultato12')
                                        myBtn45.style.opacity = '0.5'
                                        myBtn46.style.backgroundColor = 'navy'
                                        myBtn47.style.opacity = '0.5'
                                        myBtn48.style.opacity = '0.5'
                                        risultato.textContent = "Σωστά!"
                                    }
                                    
                                    function falso12() {
                                        let risultato = document.getElementById('risultato12')
                                        myBtn45.style.opacity = '0.5'
                                        myBtn46.style.opacity = '0.5'
                                        myBtn46.style.backgroundColor = ''
                                        myBtn47.style.opacity = '0.5'
                                        myBtn48.style.opacity = '0.5'
                                        risultato.textContent = "Λάθος!"
                                        tryAgain12.style.display = "block" }

                                