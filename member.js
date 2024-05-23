function skillsMember(){
    let members = [
        {
          name: "John Doe",
          skills: ["JavaScript", "React", "Node.js"]
        },
        {
          name: "Jane Doe",
          skills: ["Python", "Django", "Machine Learning"]
        }
      ];
      
      members.forEach(member => {
        console.log(`${member.name} has skills: ${member.skills.join(', ')}`);
      });
}
