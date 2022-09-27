//1.a

function countWords(para, word1, word2)
{
    let count1=0,count2=0,wrd='';
    for(let i=0;i<para.length;i++)
    {
        if(para.charAt(i)==' '|| i==para.length-1|| para.charAt(i)=='.')
        {
            
             if(wrd===word1)
             {
                count1++;
                
             }
             else if(wrd===word2)
             {
                count2++;
             }
             
                wrd='';          
        }
        else{
            wrd+=para.charAt(i);
        }
    }
   
    if(count1>count2)
    {
        return (`The word ${word1} more frequently occurred than ${word2}.`);
    }
    else{
        return (`The word ${word2} more frequently occurred than ${word1}.`);
    }
}
const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
//output =>
console.log(countWords(paragraph,'love', 'you'));//run successfully



//1.b

function cleanText(sentance)
{
    let clean='';
   // return (sentance.replace(/[^a-zA-Z0-9 :]/g,''))// with the help of regex
    for(let i=0;i<sentance.length;i++)
    {
        let w=sentance.charAt(i);
          if(w!='!'&&w!='@'&&w!='%'&&w!='#'&&w!='^'&&w!='&'&&w!='*'&&w!='$'&&w!=';'&&w!='/')
          {
            clean+=w;
          }
         
    }
    return clean;
}
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
    console.log(cleanText(sentence));


    //1.c


    function countWordS(sentance)
    {
        let wrd='',count=0,countword=0;
        for(let i=0;i<sentance.length;i++)
        {
            if(sentance.charAt(i)=='.'||sentance.charAt(i)==' '||sentance.charAt(i)=='?'||sentance.charAt(i)==',')
            {
                if(count>1)
                {
                    countword++;
                }
                  count=0;
            }
            else{
                count++;
            }
        }
        return countword;
    }
    let output=cleanText(sentence);
    console.log(countWordS(output));


    //1.d

    function varietyOfWords(sentance)
    {
        let wrd='',count=0,arr=[],x=0;
     let i=0;
      // console.log(sentance.replaceAll(wrd,''));
          sentance=sentance.replaceAll(/[^a-zA-Z0-9 :]/g,'');
          
           arr=sentance.split(' ')
            console.log(arr);
        
        for(let i=0;i<arr.length;i++)
        {
            for(let j=i+1;j<arr.length;j++)
            {
                  if(arr[i]==arr[j])
                  {
                         swap=arr[j];
                         arr[j]=arr[arr.length-1];
                         arr[arr.length-1]=swap;
                         arr.pop();
                  }
                 
            }
        }
        return arr.length;
    }
    console.log(varietyOfWords(output))
    


    //2.a

    for(let i=0;i<=7;i++)
    {
        let s='';
        for (let j=0;j<i;j++)
        {
            s+='#';
        }
       console.log(s);
    }

    //2.b

    function sevenRandomNumbers()
    {
        let arr=[],i=0,count=0;
        arr[0]=Math.floor(Math.random()*10);
       
        while(arr.length!=7)
        {
            
                x=Math.floor(Math.random()*10);
               for(let j=0;j<arr.length;j++)
                {
                     if(x==arr[j])
                      count++;
                 }
                 if(count==0)
                 {
                    arr[i++]=x;
                    
                 }
                 count=0;
        }
        console.log(arr);
    }
    sevenRandomNumbers();


    //2.c

    function reverseArray(arr)
    {
        let result=[];
        for(let i=arr.length-1;i>=0;i--)
        {
             result[arr.length-1-i]=arr[i];
        }
        return result;
    }

    console.log(reverseArray(["A", "B", "C"]));


    //2.d
 function checkUniqueness(arr)
 {
    for(let i=0;i<arr.length;i++)
    {
        let check=arr[i];
        for(let j=i+1;j<arr.length;j++)
        {
            if(check==arr[j])
            {
                return false;
            }
        }
    }
    return true;
 }
 const arrOne = [1, 4, 6, 2, 1];
 const arrTwo = [1, 4, 6, 2, 3]
console.log(checkUniqueness(arrTwo));
    console.log(checkUniqueness(arrOne));