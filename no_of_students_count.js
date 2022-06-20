// Abhishek choudhary is the teacher of a higher secondary school. He was assigned a task to record the number of students in each class. The 1st class has ‘A ’ students and 2nd class has ‘B’ students. He completed noting down all the classes but till he reached class xth the school was over. When he was going through the list he noticed that the next class had students equal to the sum of its last two classes. Can you help him to find out the number of students present in xth class using the above details.
let a=parseInt(process.argv[2])
let b=parseInt(process.argv[3])
let c;
   let n=10;
  for(let i=1; i<n; i++){
   console.log(a)
    c=a+b;
    a=b;
    b=c;
   
  }
   console.log(c)