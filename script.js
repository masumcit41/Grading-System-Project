// function to receive data
function gpa()
{
    
    let PJ = parseInt(document.getElementById('PJ').value);
    let SSS= parseInt(document.getElementById('SSS').value);
    let WDP= parseInt(document.getElementById('WDP').value);
    let OPA= parseInt(document.getElementById('OSA').value);
    let PCB= parseInt(document.getElementById('PCB').value);
    let ATP= parseInt(document.getElementById('ATP').value);
    let SLS= parseInt(document.getElementById('SLS').value);
    
    var arr= [PJ,SSS,WDP,OPA,PCB,ATP,SLS,];

                                 //blank input section
    
    var fname = document.getElementById("PJ").value;
    var fname_1 = document.getElementById("SSS").value;
    var fname_2 = document.getElementById("WDP").value;
    var fname_3 = document.getElementById("OSA").value;
    var fname_4 = document.getElementById("PCB").value;
    var fname_5 = document.getElementById("ATP").value;
    var fname_6 = document.getElementById("SLS").value;
    if (fname == "")
    {
    alert("Sir,Your first input is blank :(");
    }
    else if(fname_1 == "")
    {
    alert("Sir,Your second input is blank :(");
    }
    else if(fname_2 == "")
    {
    alert("Sir,Your third input is blank :(");
    }
    else if(fname_3 == "")
    {
    alert("Sir,Your fourth input is blank :(");
    }
    else if(fname_4 == "")
    {
    alert("Sir,Your fifth input is blank :(");
    }
    else if(fname_5 == "")
    {
    alert("Sir,Your sixth input is blank :(");
    }
    else if(fname_6 == "")
    {
    alert("Sir,Your seventh input is blank :(");
    }
                               
                              //blank input section end

                               //grading section
    
    var grade = [];
     for(i=0;i<arr.length;i++)
    {
        if( arr[i]>100 )
        {
            grade[i]="wrong input";
            
        }
        else if(arr[i]>=80 && arr[i]<=100 )
        {
            grade[i]="A+"
            
        }
        else if(arr[i]>=75 && arr[i]<79 )
        {
            grade[i]="A"
            //document.write('A');
        }
        else if(arr[i]>=70 && arr[i]<75 )
        {
            grade[i]="A-"
            //document.write('A-');
        }
        else if(arr[i]>=65 && arr[i]<70 )
        {
            grade[i]="B+"
            //document.write('B+');
        }
        else if(arr[i]>=60 && arr[i]<65 )
        {
            grade[i]="B"
            //document.write('B');
        }
        else if(arr[i]>=55 && arr[i]<60 )
        {
            grade[i]="B-"
           // document.write('B-');
        }
        else if(arr[i]>=50 && arr[i]<55 )
        {
            grade[i]="C+"
            //document.write('C+');
        }
        else if(arr[i]>=45 && arr[i]<50 )
        {
            grade[i]="C"
            //document.write('C');
        }
        else if(arr[i]>=40 && arr[i]<45 )
        {
            grade[i]="C-"
           // document.write('C-');
        }
        else if(arr[i]<40 )
        {
            grade[i]="F"
        } 
    }

    document.getElementById('s1').innerText=grade[0];
    document.getElementById('s2').innerText=grade[1];
    document.getElementById('s3').innerText=grade[2];
    document.getElementById('s4').innerText=grade[3];
    document.getElementById('s5').innerText=grade[4];
    document.getElementById('s6').innerText=grade[5];
    document.getElementById('s7').innerText=grade[6];
    
                                                  // grading section end
   var GP = [];
  
   for(i=0;i<arr.length;i++)
    {
        if( arr[i]>100 )
        {
            GP[i]=101.00;
        }
        else if(arr[i]>=80 && arr[i]<=100 )
        {
            GP[i]=4.00
            //document.write('A+');
        }
        else if(arr[i]>=75 && arr[i]<79 )
        {
            GP[i]=3.75;
            //document.write('A');
        }
        else if(arr[i]>=70 && arr[i]<75 )
        {
            GP[i]=3.50;
            //document.write('A-');
        }
        else if(arr[i]>=65 && arr[i]<70 )
        {
            GP[i]=3.25;
            //document.write('B+');
        }
        else if(arr[i]>=60 && arr[i]<65 )
        {
            GP[i]=3.00;
            //document.write('B');
        }
        else if(arr[i]>=55 && arr[i]<60 )
        {
            GP[i]=2.75;
           // document.write('B-');
        }
        else if(arr[i]>=50 && arr[i]<55 )
        {
            GP[i]=2.50;
            //document.write('C+');
        }
        else if(arr[i]>=45 && arr[i]<50 )
        {
            GP[i]=2.25;
            //document.write('C');
        }
        else if(arr[i]>=40 && arr[i]<45 )
        {
            GP[i]=2.00;
           // document.write('C-');
        }
        else if(arr[i]<40)
        {
            GP[i]=0.00;
        }
        
        
    }
    console.log(GP);
                                    //gpa section starts here
  //  for(i=0;i<GP.length;i++)
                                     // aita lop dia kmne korbo sir??
    
        if(GP[0]==0.00||GP[1]==0.00||GP[2]==0.00||GP[3]==0.00||GP[4]==0.00||GP[5]==0.00||GP[6]==0.00)
        {
            document.getElementById('gpa').innerHTML="Failed" 
            document.getElementById('average').innerText="Your Are Failed";
            
            
        }
        else if(GP[0]==101.00||GP[1]==101.00||GP[2]==101.00||GP[3]==101.00||GP[4]==101.00||GP[5]==101.00||GP[6]==101.00)
        {
            document.getElementById('gpa').innerHTML="Wrong Input"
            document.getElementById('average').innerText="Can't calculate average due to wrong input";
            
            
        }
        else
        {
            let total_GP=(GP[0]*3+GP[1]*3+GP[2]*2+GP[3]*3+GP[4]*2+GP[5]*3+GP[6]*4);
        let GPA = (total_GP/20).toFixed(2);
        document.getElementById('gpa').innerText=GPA;
                        // average section starts here            
        var avg_1 = 0;
        for(i=0;i<arr.length;i++)
        {
        var avg_1 = avg_1+arr[i];
        }
        var avg = (avg_1/7).toFixed(2);
        document.getElementById('average').innerText=avg;
                            // average section ends here
        }  
       
    
    
                                   //gpa section end
                                   
                                  
                                   

                                   
                  
}
                                 //date section starts
const d = new Date();
document.getElementById("demo").innerText = d;
                                   //date section ends



    


 
