### **1. Basic Video Element Usage**  
The '<video>' element embeds media players with playback controls.  
Supports multiple formats via <source> tags for cross-browser compatibility.  
---
### **2. JS Playback Control**  
Use video.play() and video.pause() to start/stop playback.  
Properties like paused and ended check playback status.  
---
### **3. Mute Property**  
video.muted = true disables audio without changing volume.  
Toggle mute with video.muted = !video.muted.  
---
### **4. ontimeupdate Event**  
Fires continuously as the video plays.  
Use it to update progress bars or track playback time.  
---
### **5. Changing Video Time**  
Set video.currentTime = seconds to jump to a timestamp.  
Example: video.currentTime = 30 skips to 30 seconds.
