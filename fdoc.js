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
    


    //