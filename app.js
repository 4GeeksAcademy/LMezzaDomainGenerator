let pronoun = ['the', 'our', 'my'];
let adj = ['great', 'big', 'small', 'boring'];
let noun = ['jogger', 'raccon'];
let domain = ['.com', '.org', '.net', '.info'];

for (let n = 0; n < pronoun.length; n++) {
    for (let i = 0; i < adj.length; i++) {
        for (let pr = 0; pr < noun.length; pr++) {
            for (let index = 0; index < domain.length; index++) {
                if (domain[index] === '.com') {
                    console.log(pronoun[n] + adj[i] + noun[pr] +'.es');
                } else {
                    console.log (pronoun[n] + adj[i] + noun[pr] + domain[index]);
                }
            }
        }
    }
}
