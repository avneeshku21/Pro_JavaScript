const username=prompt('Please Enter Username')|| 'Avii'
const userAge=+prompt('Please enter Age') || 20

if(userAge>=0 && userAge<=4)
    {
        console.log(`${username} is a kid`)
        console.log('He Playing games')

    }
    if(userAge>=5 && userAge<=17)
        {
            console.log(`${username} is a School Student`)
            console.log('He is learning  Science and Math')

            
        }
        if(userAge>=18 && userAge<=23)
            {
                console.log(`${username} is a College Student`)
                console.log('He is learning  computer Science ')
                
                
            }
            if(userAge>=24 && userAge<=60)
                {
                    console.log(`${username} is retired Pearson`)
                    console.log('He is Enjoying rest of life ')
                    
                    
                }