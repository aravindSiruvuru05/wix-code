// API Reference: https://www.wix.com/corvid/reference
// “Hello, World!” Example: https://www.wix.com/corvid/hello-world
import {fetch} from 'wix-fetch';
import wixData from 'wix-data';


$w.onReady( async () => {
//   $w("#dataset1").onReady( () => {
//     $w("#dataset1").remove()
//       .then( async () => {
//         console.log("Done removing current item");
// 		// await b_click();
// 		// $w("#dataset1").refresh();
//       } );
    
//   } );


await wixData.truncate("pollocks1")
 .then( () => {
    console.log("All items removed");
  } )
  .catch( (err) => {
    let errorMsg = err;
  } );
const final = await b_click();
let dataset = $w("#dataset1"); // or the name of your dataset

	dataset.onReady(async() => {
		while (dataset.getCurrentItem()) {
			await dataset.remove();
		}
		console.log("asdf");
		await wixData.bulkInsert("pollocks1",final);
		
		console.log("ready");
	dataset.refresh();
	});

} );




export async function getData (url) {
	const response = await fetch(url, {method: 'GET'});
  return response.json();
}

export function mapper (item) {
	const fields = item.fields;
	return {
		mediaUrl: fields.mediaUrl.stringValue,
		description: fields.description.stringValue,
		username: fields.username.stringValue,
		classId: fields.classId.stringValue
	};
}

export async function b_click() {
	const url = "https://firestore.googleapis.com/v1/projects/pollocksschool-23fd6/databases/(default)/documents/timeline/intilli3A/classPosts/";
	const result = await getData(url);
	const items = result.documents.map(mapper);
	return items;
	
	// items.forEach( function (item) {
	// 	wixData.insert("pollocks1", item);	
	// });

	// const url = "https://jsonplaceholder.typicode.com/photos";
	// const result = await getData(url);
	// const res = result.map(function (r) {
	// 	return {...r ,_id : r.id.toString()}
	// })
	// console.log(res);
	// $w("#repeater1").data = res;

	// wixData.query("Customer")
	// 	.limit(2)       
  	// 	.find()
  	// 	.then(results => {
	// 		  console.log(results);
	// 	  	// const titlesOnly = getUniqueTitles(results._items);   
	// 	  	$w("#repeater1").data = [{_id:"3",titdle:"sd"},{_id:"2",titdle:"sd"}];    
  	// 	});
  

}
	// function getUniqueTitles(items) {    
  	// 	const titlesOnly = items.map(item => item); 
   	// 	return [...new Set(titlesOnly)];
	// }

	// function buildOptions(uniqueList) {   
	// 	return uniqueList.map(curr => {
	// 		return {label:curr, value:curr};  
	// 	});

	// }



// export async function b_click(event) {
	
	// const url = "https://jsonplaceholder.typicode.com/photos";
	// const result = await getData(url);
// 	console.log(result);
// 	// $w("#image1").src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWUAAACNCAMAAABYO5vSAAABzlBMVEX////AcbXuAAC7ZrDPmMf97e3Efbr8+Pvy5fD97r/+9NXv3uzkyOD///3Tocveutj27fTLjsLCd7f1h4n5v4vyWUfyUlj+8/P2lZfvAArvEiD/9+f++OH0el371KD+99z3p3v6zs/6xMXzblXzWlvjHkXTqtT4tbb/+/LxTVH64a3d7uCBxo/3pqfwMjrwISjB4cbFy4JR0cXy///v/f9Ew57v2p6Uv26k1bD1iWf3oaLzYk5pvXqgwnX/6cDX+P/l8+ps4eqC6fnG9v+Z0KNfunWSyZGI1LrzZ2r0dU3bq836yJH5uanyP0G5NZHcJVb0e4D70rTL59Nmt2fX3bNMv43Z0Y6cv2q/6ODr5MF3wod/2tCn6ezN05dTsVZW1Mzb6dJTyrHK2ayEw4aL5etsxJbe2aM0s2qt38u3y4lztl1rtVuizZaxxXVT19c9wpyb7v+O3tW605+U1bitNZ7xSTL2mGrFPojehKXBFXv/4N34tZX3w8fQXZL4rHPhTG3kADLTA1r83s/OfK7NN3reYoTzaV/mgpn1jXDnPFTzQDC1VazVjqDgYG/sw67wsbvXXIjXRnX7sJj1inzfzerIB2j0gHNzzasjqEIqrlu8FC8ZAAAOyElEQVR4nO2ci18TxxaAp9PGlNWx2Mhjd6ORIM1CQjZAIBHyWIQItuE2ELE8RAkPJYgKWKzF2iK21nJrbemD2//2npkN5J0AxsWW+X6a7M7OK9/Onj0bUIQ4HA6Hw+FwOBwOh8MxEDIxEQgEJjtyiqt2wvl1bTeUqUmvIdP6l0FuehCS793K0dz1oC+vqhy8b9Ck/nWQIFhG8uJlePF4xmBboW/UssfjCSNlesTjpJt9aNyXmLZCDWXaM+JF1rEx+iazWpzS6JbR7R26oGcmlpHS1j4zO9f1IOxp98zM91l9Nz2avkktt7V7ye0dT3Cyo+tOYiE5qSXbPVOj+euekwWLGAiFAkryPnsDj0jxdnU6YXkLd5etvvvICpu2xcsQMUhbe4fW2QfBo7cF3HY9mL4LXWg8VpeBJJnlqoAcvOV0XovPtbHgCxGDOMeDN8FyL/U4HbxJLcM56LiegDhy734LxBQ4F0txzckll4P4mOWJATnY6QfC927RfYgYUwn/7TizrEx1+q/5ci3TtQzL2u+PJHhgLgNZTN392KKl6Ya+ljun73qRsMgs2xbDyLpnebozyzJC4zeXj/IT/BMgbX5CWI4mxJdJf2RZ8M0Rf2/XgxHfsjX4N7Ns9c3Jyd2I4VWSt+h67mJxecR3mYTi3HIZiIuyQtNlATYIPHtcgd3QQBh2Vx72j63e0Ise9veNuJaurUDytuoaCKOQ/pc2mjvqD8HhcDgcDofDKcz7Rz2BY8HHRz2BYwG3bATcshFwy0bALRsBt2wE3LIRcMtGwC0bAbdsBNyyEXDLRsAtG8HxsvzB++8dCSeOZthcvjQbY7nakGHeVU4YZPlDQ4Z5V+GWjYBbNgJu2Qi4ZSPglo2AWzYCbtkIuGUj4JaNgFs2Am7ZCLhlI+CWjYBbNgJu2Qi4ZSPglo3AIMtnjrflj42xXG3MMO8qx/unnhwOh8PhcDgcROpyCsx1uftmUroH8+FSapI7Usacih6iEyrWZj+Dluj3DXoty1nckD2NQZw1zPoQvmot2YOwNnSokeVzuPAB5RHGRQ4hZGooPFoVtuxjzPV91dpDvoS/qsizb45l86CkZu5bz2FHg1KyB6Gm9lAjw0cofGBbHHQ4irXqxs0Fy62tDQXLs2hwS/X7mlsKZXNbfXyQBsXIsVwrqVmWG7a+LtdDxS3XNn1avFWrVNjyflh3qwezDNeyu1E+9HhpqGWTyaQ/r4fW1GZ3lmU7/ixzV4GqJL3Jotyu5TooSB2h22Z4N9PIZkL6gb0GAGyaMi3TWinMdbVNp+keMaU6pAdpYxoiSb3UnBkr63Y7JfTNlMKcNR99IoicxUM1WZZhBFqrWh+D6FPPnAvgbrTtw2I5zorddgiD36/DtvXq563yOSnzcLZl+zmMxSg7Iw2XoNXFU+Zdy+boGhTUn4LN87i+GWMHnEA7QrYeqRVjNzSg0XaogTaW6YjqL41py8KauLvpwKqKMZyaJ1AJf3OSxWkHbfzUhMi39Gg6nEQbobwxilJxGTNE6QQ9VAObFjof9C27XqvE79arxEzLcEeRBzFu+hmm9AIPQ8lVdR0sZF5j7ouZzg/LWUnCdnut+B39OJsfQSAubtkhXrTbH21E4azb1Y3Hdgduer5rOYafvbZb8LM/wLIkXrJHN9GmAyZoa1TXot88oSHxid1+aeO5mQZe2g9W059GabDvbprszdC12XQRf2+3N0tPTyLlgioN2e1u8YdqtBmDzfU9Tbgnao/24E+oQ/DnsAMWyQ2fxYIbHfbo2ucfQTU2ESTDGcux3OPuueqApQMnaFh9IaN6/CNcgpuZNwU36+HNLWOYtFlVX+v7JSxbe7ZCYAFLJlpr2Ey1qynLVfjcJlQZFC3U8p8fIpIKLGD5DFiUX2J6ScqXpDpkbVTNdIWqReLyxaZP6DV2AZZ9nSS9ppZFGg6w2pATl180UQXd+CeU9kcu0CkLYozes0Nbr7K6zrUs0VpCo1gFOiWHIA3mJa0Vsiw+oW8tu5dhnuX0BdMqfkc/xZNaE+htoiXKBXFYt1wrtbJ5u3tkdF68kM5KwLIAb9/gp6n+vkSt+L90c32rlGW8we7KIfGlAqOcp9uf4TzLYv3uSHv+HrGRBt0fpftKk2t5g9WqF9+D161nTRtZlRk9TRWxrOcY5wtbJlebMizrdigO/PNeEbN8sfkkKxj6/JN0XxRbo5u+RcVHDopF+h4CBmtsLZZj6JZfsfBfh7/+ULmgn+qzeZYFLJ5zvGYZ7a4/Ox6EysqLrSd0OPvQRla+kmt5iD0KRNVBeB0WpZf5kxFoEHljSloWYk2n02O04l9SW8q2vrrY8qaWrTU1AisYgshTwDKB0Jq6NWHySGyhR4pmctRySHzEMqg6ccOUb1mIWQAI5dGrGG+8iqE9f9atNRq5hB5V1MfDWambXkveps3roZZ+xoQ1anldlFoKzKZ741WB0gNS0nKV9OxUeq8Vp/6poxkiRsoyfj+1lnctQxgraFk6W5dCeaQ3LmmZ4Je6ZfxngbVcBVm9KnXTjuvOw9bgrj+Y/RlaFVZpKDVc1krUa0EUA4ZyLJ+V1EKpeINY9Dl0/5SJGFvP0j/5atVjaxTeHPgrvQgufj0ub5xm9Yd+OlUwYjTg9NONQ488cmPJiPGMhSAZ/1BdPGKss8TQ+gJusLq/ehzTjwxufFCo67wcgy58ZBF/oCPVvlCf57WQ8a8V+NlfGctRnI5rv2wNwfqqa4Q73uaaRCOaqQYLuuVt8Xd6e46qL5SCljdr8B/0fb31U2j8G20clUpZvirS/BVdErdJluVuMcOyW8+MYvAYzPwN46upJOGJ9IqFa8frU5ld59396POz8jud24WNTxX11cncybzc+KbwLA9EactwM/nP3jZ5IW3DXR9fUhD5S4zBzGrFP1OZnIK3HrPvCZ6jgpbhPk5T6VAzPoXIoAjhAJ4zS1nexGtn6LUCt/gsy5s1GZbhaQ6O2N1D1cyfsPZs1xIRN55C6rstNWetxFzL6lADPSNwndm2BqshaLzOnYxamUwuz7KYeTjTMkLNWxAEf2OrY5CGNunXk9Qy/dzrbrrvfi+jL/3ZrzH1xB7bkmgFNtpF2rg5w7KtMeObtmaWfTloffGn0yjbsu2cJKUTxbMq6/QETdjr2ZcwbFrwVGxyq3rwRZnf1VThXMu00tNqyOElgd5r4eEhO/epTL48HGNPUqFYaiJw/808nG0Zalu605sWZtNaz2auRC2WmCmzL9a13L3bXwga/PjHXuN6Eo3t9StfcKcH6f6RnUcb5AGsBhmO1aWnCsXRdDreYEmNKsQcqNuSYlvW52N5bM74jKlaaeAeWRVluQpqiFn0kYaR8iRznVXGchlyLL81qg73HfWbAZaFQsVbGTuGWJYbN97+IMDvXxkyTDZCzVYhy60ZX/YKak8lvvksg7ytlvtZSSWw/lX6p15vB9tfgwUsyy/3HnchpZe682u8BVrro6V/VnLyIPnkh/+oXzxTovUVlXz68E0/yMsxS/DRqfJ19scbzPjIeIP/uvv00ViuyH82Xm3suTquls9Uopd9wy0bAbdsBNyyEXDLRsAtGwG3bATcshFwy0bALRsBt2wE3LIRcMtGwC0bAbdsBAV/E+edpiIzNtjyMcVcsUuLw+FwOP8chNmjnsFxIBTP2CFtnnL15WAkEIjf6ih8lChH8RtC7ypWj6cPKdOeESTE9XdWJPj6+5DN4wnrRYWQgxq8LF4ufFS5V6TZccQ6OzkziqZ3FpIjYHk64UmOsCJrsD9cNb8wNWD1tTsLN5WD9EDg8rX+fgJ/+5Cnv3+lAzZdSJ7pvxKfuPEwjEj2v6klA2F4Hbmhd7B66OUu9AMPw4dtnsK5Qi9Ef5/epf8NeytBKLIM13ZyAV3vnI6T5Ai6nhiP0MsdIsb1h6hldMzXW6QpsyzESVu71tUZ7tpBrogc7FVG+1pcsu++HPR0tC0g7UpWGwJF0PA+27H6tMNOu2WCaFpbu7fIh3Ltrxc2ASG+rDeKHHYy+yA0EW8nbZEJ18B0XEkGJlwr4wEoVqhlP1LAcrEFJwcDExMTc0rbJK0ZGu2bvYyEyS6Xdnt07Is5GjGciXDXw6w2ZCoRRvKshmSn0wsfUtEQ/eN0FonuxWihHp0JDRpCY7hknNCf3g+83I5oGqzzsncGWBQIjc/T1lpHKIA0QuQOOrWDTaY88kLYuohmVpDNCRFjlb6HImHFE25bQdd3OlpGnb5iAlhcpudjhFq26ZZ3ugJ+/4IT/IFledW7upzdSHNpaKbdOz47kLwFXUPDLheaSSwtHSx4MMvXBkJ/70xPJVbnO7T/XQne8l6j/XTdGUhGxvwJhGZK/34q7WEHKbO95Pa8/8pcKCDTWXtQcCdZ9s5/QJS20dl2iM6uwI3QTWSbcE3cUKZGfQnvzJ0529K8b862WNwyO+dU5/VER8sEcs2Ttl5rp1fws/lOIrI0F8m5qMnSJGl7iGQNFv8YswzxJe5VgnMHmnbLHZfLNdEH8U6465W/mNNGw/LqmC+s3JvretAHy1KJ98nlAxLUsvrCBC6G6+3jAVg2sGSEUQgifQeaTXkI+6fo9JX9oXupor3SIuxahmCuJCOBZeS6E2j3kqlIfNkKy9wTn0PCYp48YUUZDSMFau1ZtvkgIywW/QsD55RODnQKdxFa6tU6QVQS+on0dvXTYtRyWVgpErYz+7nsaUfINhuI71luuQO9LJdteWTM5iV1tvzbkBxPQqiGYHSbWR7Q1zKSDxExkG45cy1DP9RypAMJgYXJ8v0IN5ecSL63gu5Ry74xwtYyqXhgriC5lsn40lh+rZk7sFDGI/4EWNbGXQ+DLC7PawcaCtYyBfICZQoa78blzqX5MMR5+e9JL1pK7KfLL+AiIKtX/A8gtSK3O/2LLC4nDjQZY9Fyr1DZWWCFKqwapARaB9zTISNgOYZ2sKEUbe9NodmF88GYnmOwnAVByoCu9++7ow46G9iimQrRO+QUwNmZ84RCtGuVvoNxtIWc5Wftf4uPchwOh8PhcDgcDofD4XA4HM5B+T872sDUb8zkTAAAAABJRU5ErkJggg==';
// 	// result.forEach( function(r) {
// 	// 	$w("#text3").text = r.title
// 	// });
// 	const a = {
// 		a : <img src="/html/images/test.png" alt="Simply Easy Learning" width="200"
//          height="80">
// 	}
// 	wixData.insert("photos", result[1]);
// }
