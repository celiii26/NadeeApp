(()=>{"use strict";var e={430:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ie});var a=r(7775),o=r(5349),i=r(3181),n=r(885),l=r(6983),d=r(9766),u=r(3453),s=r(7901),c=r(4574),f=r(5012),p=r(3936),g=r(458),h=r(5861),m=r(2364),b=r(5040),x=r(1412),j=r(1001),y=(0,m.initializeApp)({apiKey:"AIzaSyBMXuUw5ocB0EirO3tlLvDsH1SgufGz7YE",authDomain:"nadee-7fa43.firebaseapp.com",projectId:"nadee-7fa43",storageBucket:"nadee-7fa43.appspot.com",messagingSenderId:"466306816897",appId:"1:466306816897:web:e53787c01ce5b60f192680",measurementId:"G-0K7KLDQFE4"}),T=(0,b.getAuth)(y),v=(0,j.getStorage)(y);const R=(0,x.getFirestore)();function B(){var e=(0,d.useState)(),t=(0,n.default)(e,2),r=t[0],a=t[1];return(0,d.useEffect)((function(){return(0,b.onAuthStateChanged)(T,(function(e){return a(e)}))}),[]),r}function w(e,t,r){return C.apply(this,arguments)}function C(){return(C=(0,h.default)((function*(e,t,r){var a=(0,j.ref)(v,t.uid+".png");r(!0);yield(0,j.uploadBytes)(a,e);var o=yield(0,j.getDownloadURL)(a);(0,b.updateProfile)(t,{photoURL:o}),(0,b.updateProfile)(t,{displayName:t.uid}),r(!1),alert("Uploaded file!")}))).apply(this,arguments)}var S=r(5770);const k=function(){var e=(0,d.useState)(""),t=(0,n.default)(e,2),a=t[0],o=t[1],i=(0,d.useState)(""),h=(0,n.default)(i,2),m=h[0],j=h[1],y=(0,l.useNavigation)();(0,d.useEffect)((function(){(0,b.getAuth)();(0,b.onAuthStateChanged)(T,(function(e){e&&y.replace("HomeTab")}))}));return(0,S.jsxs)(u.default,{style:z.container,behavior:"padding",children:[(0,S.jsx)(p.default,{style:z.logoContainer,children:(0,S.jsx)(g.default,{style:z.logo,source:r(7435)})}),(0,S.jsxs)(p.default,{style:z.inputContainer,children:[(0,S.jsx)(c.default,{placeholder:"Email",value:a,onChangeText:function(e){return o(e)},style:z.input}),(0,S.jsx)(c.default,{placeholder:"Password",value:m,onChangeText:function(e){return j(e)},style:z.input,secureTextEntry:!0})]}),(0,S.jsxs)(p.default,{style:z.buttonContainer,children:[(0,S.jsx)(f.default,{onPress:function(){(0,b.signInWithEmailAndPassword)(T,a,m).then((function(e){var t=e.user;console.log("Logged in with:",t.email)})).catch((function(e){var t=e.message;alert(t)}))},style:z.button,children:(0,S.jsx)(s.default,{style:z.buttonText,children:"Login"})}),(0,S.jsx)(f.default,{onPress:function(){(0,b.createUserWithEmailAndPassword)(T,a,m).then((function(e){var t=e.user,r=(0,x.doc)(R,"dataBaru",t.uid),a={userID:t.uid};(0,x.setDoc)(r,a),console.log("Registered with:",t.email)})).catch((function(e){var t=e.message;alert(t)}))},style:[z.button,z.buttonOutline],children:(0,S.jsx)(s.default,{style:z.buttonOutlineText,children:"Register"})})]})]})};var z=a.default.create({container:{flex:1,backgroundColor:"#D8CBBB",flexDirection:"column",justifyContent:"center",alignItems:"center"},logoContainer:{flex:.5,justifyContent:"center",alignItems:"center"},logo:{width:98,height:94},inputContainer:{width:"80%"},input:{backgroundColor:"white",paddingHorizontal:15,paddingVertical:10,borderRadius:10,marginTop:5},buttonContainer:{width:"60%",justifyContent:"center",alignItems:"center",marginTop:40},button:{backgroundColor:"#85586F",width:"100%",padding:15,borderRadius:10,alignItems:"center"},buttonOutline:{backgroundColor:"white",marginTop:5,borderColor:"#85586F",borderWidth:2},buttonText:{color:"white",fontWeight:"700",fontSize:16},buttonOutlineText:{color:"#85586F",fontWeight:"700",fontSize:16}}),F=r(5166),D=r(4300),P=r(4942),L=r(3046),I=r(5669);function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){(0,P.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const H=function(){var e=(0,l.useNavigation)(),t=(B(),(0,d.useState)([{name:"Loading...",id:"initial"}])),r=(0,n.default)(t,2),a=r[0],o=r[1];return(0,d.useEffect)((function(){return(0,x.onSnapshot)((0,x.collection)(R,"dataBaru"),(function(e){return o(e.docs.map((function(e){return O(O({},e.data()),{},{id:e.id})})))}))}),[]),console.log(a),(0,S.jsxs)(p.default,{style:E.container,children:[(0,S.jsx)(p.default,{style:E.cardheader}),(0,S.jsx)(L.default,{contentInsetAdjustmentBehavior:"automatic",showsVerticalScrollIndicator:!1,children:(0,S.jsx)(p.default,{style:E.popularWrapper,children:a.map((function(t){return(0,S.jsx)(f.default,{onPress:function(){return e.navigate("DetailScreen",{item:t})},children:(0,S.jsxs)(p.default,{style:[E.popularCardWrapper,{marginTop:1==t.id?10:20}],children:[(0,S.jsxs)(p.default,{style:E.popularTitlesWrapper,children:[(0,S.jsx)(s.default,{style:E.popularTitlesTitle,children:t.name}),(0,S.jsxs)(s.default,{style:E.popularTitlesTitle,children:[t.age," tahun"]}),(0,S.jsx)(s.default,{style:E.popularTitlesTitle,children:t.profesi}),(0,S.jsx)(s.default,{style:E.popularTitlesTitle,children:t.domisili})]}),(0,S.jsx)(p.default,{style:E.popularCardRight,children:(0,S.jsx)(g.default,{source:{uri:t.photoURL},style:E.popularCardImage})})]})},t.id)}))})})]})};var E=a.default.create({container:{flex:1,backgroundColor:"#D8CBBB",flexDirection:"column",justifyContent:"center",alignItems:"center"},cardheader:{flexDirection:"row",justifyContent:"space-between"},headerWrapper:{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,paddingTop:20,alignItems:"center"},profileImage:{width:40,height:40,borderRadius:40},titlesWrapper:{marginTop:30,paddingHorizontal:20},titlesTitle:{fontSize:32,color:"black",marginTop:5},popularWrapper:{paddingHorizontal:20},popularTitle:{fontSize:16},popularCardWrapper:{backgroundColor:"white",width:250,height:130,borderRadius:25,paddingTop:20,paddingLeft:20,flexDirection:"row",overflow:"hidden",shadowColor:"black",shadowOffset:{width:0,height:2},shadowOpacity:.05,shadowRadius:10,elevation:2,position:"relative"},popularTopWrapper:{flexDirection:"row",alignItems:"center"},popularTitlesWrapper:{marginTop:10,flexDirection:"column"},popularTitlesTitle:{fontSize:10,color:"black",flexDirection:"column"},popularCardRight:{position:"absolute",right:5,top:20,bottom:0,overflow:"hidden"},popularCardImage:{width:90,height:90,borderRadius:75,marginRight:15}});const A=function(){var e=(0,l.useNavigation)(),t=B(),r=(0,d.useState)("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"),a=(0,n.default)(r,2),o=a[0],i=a[1];(0,d.useEffect)((function(){null!=t&&t.photoURL&&i(t.photoURL)}),[t]);var u=(0,d.useState)(),c=(0,n.default)(u,2),h=c[0],m=c[1];return(0,d.useEffect)((function(){(0,x.getDoc)((0,x.doc)(R,"dataBaru",T.currentUser.uid)).then((function(e){e.exists&&m(e.data())}))})),h?(0,S.jsx)(p.default,{style:{flex:1},children:(0,S.jsx)(L.default,{contentInsetAdjustmentBehavior:"automatic",showsVerticalScrollIndicator:!1,children:(0,S.jsxs)(p.default,{style:V.container,children:[(0,S.jsx)(g.default,{style:V.profilePic,source:{uri:o}}),(0,S.jsx)(s.default,{style:V.name}),(0,S.jsxs)(p.default,{style:V.biodata,children:[(0,S.jsx)(s.default,{style:V.attribute,children:"Nama"}),(0,S.jsx)(p.default,{style:V.valuebox,children:(0,S.jsx)(s.default,{style:V.attributeval,children:h.name||"Segera isi profil anda!!"})}),(0,S.jsx)(s.default,{style:V.attribute,children:"Umur"}),(0,S.jsx)(p.default,{style:V.valuebox,children:(0,S.jsx)(s.default,{style:V.attributeval,children:h.age||""})}),(0,S.jsx)(s.default,{style:V.attribute,children:"Asal Daerah"}),(0,S.jsx)(p.default,{style:V.valuebox,children:(0,S.jsx)(s.default,{style:V.attributeval,children:h.domisili||""})}),(0,S.jsx)(s.default,{style:V.attribute,children:"Profesi"}),(0,S.jsx)(p.default,{style:V.valuebox,children:(0,S.jsx)(s.default,{style:V.attributeval,children:h.profesi||""})}),(0,S.jsx)(s.default,{style:V.attribute,children:"Deskripsi"}),(0,S.jsx)(p.default,{style:V.valuebox,children:(0,S.jsx)(s.default,{style:V.attributeval,children:h.deskripsi||""})}),(0,S.jsx)(f.default,{style:V.detailButton,onPress:function(){return e.navigate("EditProfileScreen",{})},children:(0,S.jsx)(s.default,{style:V.buttonText,children:"EDIT PROFILE"})}),(0,S.jsx)(f.default,{style:V.detailButtonBack,onPress:function(){(0,b.signOut)(T).then((function(){e.replace("Login")})).catch((function(e){var t=e.message;alert(t)}))},children:(0,S.jsx)(s.default,{style:V.buttonTextBack,children:"SIGN OUT"})})]})]})})}):null};var V=a.default.create({header:{flex:1,justifyContent:"left",backgroundColor:"#FFFFFF",flexDirection:"row",padding:10},detailButton:{backgroundColor:"#85586F",paddingHorizontal:20,paddingVertical:10,borderTopRightRadius:5,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,marginBottom:10,marginRight:5,marginTop:10},detailButtonBack:{backgroundColor:"#D8CBBB",borderColor:"black",paddingHorizontal:20,paddingVertical:10,borderTopRightRadius:5,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,marginBottom:10,marginRight:5},buttonTextBack:{color:"#6E485B",fontWeight:"500",fontSize:14,paddingLeft:8,paddingRight:8},buttonText:{color:"white",fontWeight:"500",fontSize:14,paddingLeft:8,paddingRight:8},container:{flex:1,alignItems:"center",justifyContent:"center",flexDirection:"column",backgroundColor:"#FFFFFF"},profilePic:{width:150,height:150,borderRadius:75,marginBottom:20},name:{fontSize:24,fontWeight:"bold",marginBottom:10},bio:{fontSize:16,textAlign:"center",paddingHorizontal:20},valuebox:{backgroundColor:"#EFF0F2",paddingHorizontal:10,paddingVertical:8,borderTopRightRadius:5,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,width:300,marginBottom:10},attribute:{fontSize:15,fontWeight:500,textAlign:"left",marginBottom:3},attributeval:{fontSize:15,fontWeight:300,textAlign:"left"},biodata:{flex:1,flexDirection:"column",justifyContent:"right"},buttonProfile:{backgroundColor:"#85586F",paddingHorizontal:10,paddingVertical:8,borderTopRightRadius:5,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,width:300}});const U=function(e){var t=e.route.params.item,r=(0,l.useNavigation)(),a=B(),o=function(){var e=(0,h.default)((function*(){var e=(0,x.doc)(R,"request",a.uid),o={pengirim:a.uid,penerima:t.userID,status:"pending"};yield(0,x.setDoc)(e,o),r.navigate("Request Sent",{item:t})}));return function(){return e.apply(this,arguments)}}();return(0,S.jsx)(p.default,{children:(0,S.jsx)(L.default,{contentInsetAdjustmentBehavior:"automatic",showsVerticalScrollIndicator:!1,children:(0,S.jsxs)(p.default,{style:N.container,children:[(0,S.jsx)(g.default,{style:N.profilePic,source:{uri:t.photoURL}}),(0,S.jsx)(s.default,{style:N.name}),(0,S.jsxs)(p.default,{style:N.biodata,children:[(0,S.jsx)(s.default,{style:N.attribute,children:"Nama"}),(0,S.jsx)(p.default,{style:N.valuebox,children:(0,S.jsx)(s.default,{style:N.attributeval,children:t.name})}),(0,S.jsx)(s.default,{style:N.attribute,children:"Umur"}),(0,S.jsx)(p.default,{style:N.valuebox,children:(0,S.jsx)(s.default,{style:N.attributeval,children:t.age})}),(0,S.jsx)(s.default,{style:N.attribute,children:"Asal Daerah"}),(0,S.jsx)(p.default,{style:N.valuebox,children:(0,S.jsx)(s.default,{style:N.attributeval,children:t.domisili})}),(0,S.jsx)(s.default,{style:N.attribute,children:"Profesi"}),(0,S.jsx)(p.default,{style:N.valuebox,children:(0,S.jsx)(s.default,{style:N.attributeval,children:t.profesi})}),(0,S.jsx)(s.default,{style:N.attribute,children:"Deskripsi"}),(0,S.jsx)(p.default,{style:N.valuebox,children:(0,S.jsx)(s.default,{style:N.attributeval,children:t.deskripsi})})]}),(0,S.jsx)(f.default,{style:N.detailButton,onPress:o,children:(0,S.jsx)(s.default,{style:N.buttonText,children:"Ajukan Taaruf"})})]},t.id)})})};var N=a.default.create({buttonText:{color:"white",fontWeight:"500",fontSize:14},detailButton:{backgroundColor:"#85586F",paddingHorizontal:20,paddingVertical:10,borderTopRightRadius:5,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,marginBottom:10,marginRight:5,marginTop:10},detailButtonBack:{backgroundColor:"#D8CBBB",borderColor:"black",paddingHorizontal:20,paddingVertical:10,borderTopRightRadius:5,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,marginBottom:10,marginRight:5},buttonTextBack:{color:"#6E485B",fontWeight:"500",fontSize:14},container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#FFFFFF"},profilePic:{width:150,height:150,borderRadius:75,marginBottom:20,marginTop:10},name:{fontSize:24,fontWeight:"bold",marginBottom:10},bio:{fontSize:16,textAlign:"center",paddingHorizontal:20},filecontainer:{},valuebox:{backgroundColor:"#EFF0F2",paddingHorizontal:10,paddingVertical:8,borderTopRightRadius:5,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,width:300,marginBottom:10},attribute:{font:"Poppins",fontSize:15,fontWeight:500,textAlign:"left",marginBottom:3},attributeval:{font:"Poppins",fontSize:15,fontWeight:300,textAlign:"left"},biodata:{flex:1,flexDirection:"column",justifyContent:"right"}});const _=r.p+"static/media/Poppins-Light.25b96349cf564e8ba0dc.ttf";const q=function(e){var t=e.route.params.item,r=(0,l.useNavigation)(),a=B(),o=function(){var e=(0,h.default)((function*(){var e=(0,x.doc)(R,"request",a.uid);yield(0,x.deleteDoc)(e),alert("Pengajuan Taaruf telah dibatalkan"),r.navigate("Home")}));return function(){return e.apply(this,arguments)}}(),i=(0,I.useFonts)({PoppinsLight:_});return(0,n.default)(i,1)[0]?(0,S.jsxs)(p.default,{style:M.container,children:[(0,S.jsx)(s.default,{style:{marginBottom:10},children:" Permintaan Taaruf Telah Terkirim. "}),(0,S.jsx)(f.default,{onPress:function(){return r.navigate("DetailScreen",{item:t})},children:(0,S.jsxs)(p.default,{style:[M.popularCardWrapper,{marginTop:1==t.id?10:20}],children:[(0,S.jsx)(p.default,{children:(0,S.jsx)(p.default,{children:(0,S.jsxs)(p.default,{style:M.popularTitlesWrapper,children:[(0,S.jsx)(s.default,{style:M.popularTitlesTitle,children:t.name}),(0,S.jsxs)(s.default,{style:M.popularTitlesTitle,children:[t.age," tahun"]}),(0,S.jsx)(s.default,{style:M.popularTitlesTitle,children:t.profesi}),(0,S.jsx)(s.default,{style:M.popularTitlesTitle,children:t.domisili})]})})}),(0,S.jsx)(p.default,{style:M.popularCardRight,children:(0,S.jsx)(g.default,{source:{uri:t.photoURL},style:M.popularCardImage})})]})},t.id),(0,S.jsx)(f.default,{style:M.detailButton,onPress:function(){return r.navigate("Progress")},children:(0,S.jsx)(s.default,{style:M.buttonText,children:"Lihat Progress"})}),(0,S.jsx)(f.default,{style:M.detailButtonBack,onPress:function(){return r.navigate("Home")},children:(0,S.jsx)(s.default,{style:M.buttonTextBack,onPress:o,children:"Batalkan Taaruf"})})]}):(0,S.jsx)(p.default,{})};var M=a.default.create({detailButtonBack:{backgroundColor:"#F5F5F5",borderColor:"#6E485B",paddingHorizontal:10,paddingVertical:10,borderTopRightRadius:5,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,marginBottom:10,marginRight:5,marginTop:10},buttonTextBack:{color:"#6E485B",fontWeight:"500",fontSize:14},buttonCancel:{backgroundColor:"#D81818",paddingHorizontal:10,paddingVertical:8,borderTopRightRadius:5,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,color:"#FFFFF"},detailButton:{backgroundColor:"#85586F",paddingHorizontal:10,paddingVertical:8,borderTopRightRadius:5,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,marginTop:10},buttonProfile:{backgroundColor:"#85586F",width:"60%",padding:15,borderRadius:10,alignItems:"center"},container:{flex:1,backgroundColor:"#D8CBBB",flexDirection:"column",justifyContent:"center",alignItems:"center"},logoContainer:{flex:.5,justifyContent:"center",alignItems:"center"},logo:{width:98,height:94},button:{backgroundColor:"#0782F9",width:"60%",padding:15,borderRadius:10,alignItems:"center",marginTop:40},buttonText:{color:"white",fontWeight:"500",fontSize:14},headerWrapper:{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,paddingTop:20,alignItems:"center"},profileImage:{width:40,height:40,borderRadius:40},titlesWrapper:{marginTop:30,paddingHorizontal:20},titlesSubtitle:{fontFamily:"arial",fontSize:16,color:"black"},titlesTitle:{fontFamily:"arial",fontSize:32,color:"black",marginTop:5},searchWrapper:{flexDirection:"row",alignItems:"center",paddingHorizontal:20,marginTop:30},search:{flex:1,marginLeft:10,borderBottomColor:"white",borderBottomWidth:2},searchText:{fontFamily:"arial",fontSize:14,marginBottom:5,color:"black"},popularWrapper:{paddingHorizontal:20},popularTitle:{fontFamily:"arial",fontSize:16},popularCardWrapper:{backgroundColor:"white",width:250,height:130,borderRadius:25,paddingTop:20,paddingLeft:20,flexDirection:"row",overflow:"hidden",shadowColor:"black",shadowOffset:{width:0,height:2},shadowOpacity:.05,shadowRadius:10,elevation:2,position:"relative"},popularTopWrapper:{flexDirection:"row",alignItems:"center"},popularTopText:{marginLeft:10,fontFamily:"arial",fontSize:14},popularTitlesWrapper:{marginTop:10,flexDirection:"column"},popularTitlesTitle:{fontSize:12,color:"black",flexDirection:"column"},popularCardBottom:{flexDirection:"row",alignItems:"center",marginTop:10,marginLeft:5},buttonName:{color:"#F5F5F5",fontSize:12,fontFamily:"arial"},ratingWrapper:{flexDirection:"row",alignItems:"center",marginLeft:20},rating:{fontFamily:"arial",fontSize:12,color:"black",marginLeft:5},popularCardRight:{position:"absolute",right:5,top:20,bottom:0,overflow:"hidden"},popularCardImage:{width:90,height:90,borderRadius:75,marginRight:15},asalDaerah:{fontSize:12,color:"black",flexDirection:"column"}}),G=r(2982);function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}const Q=function(){var e=(0,l.useNavigation)(),t=(B(),(0,I.useFonts)({PoppinsLight:_})),r=(0,n.default)(t,1)[0],a=function(){var e=(0,h.default)((function*(){try{var e=(0,x.query)((0,x.collection)(R,"request"),(0,x.where)("penerima","==",T.currentUser.uid)),t=yield(0,x.getDocs)(e),r=[],a=t.docs.map(function(){var e=(0,h.default)((function*(e){var t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){(0,P.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({id:e.id},e.data()),r=yield(0,x.getDoc)((0,x.doc)(R,"dataBaru",t.pengirim));return t.sender=r.data(),t}));return function(t){return e.apply(this,arguments)}}()),o=yield Promise.all(a);return r.push.apply(r,(0,G.default)(o)),r}catch(i){return console.error("Error mendapatkan daftar permintaan pertemanan:",i),[]}}));return function(){return e.apply(this,arguments)}}(),o=(0,d.useState)([]),i=(0,n.default)(o,2),u=i[0],c=i[1];return(0,d.useEffect)((function(){var e=function(){var e=(0,h.default)((function*(){var e=yield a();c(e)}));return function(){return e.apply(this,arguments)}}();e()}),[]),console.log(u),r?(0,S.jsx)(p.default,{style:X.container,children:(0,S.jsx)(L.default,{contentInsetAdjustmentBehavior:"automatic",showsVerticalScrollIndicator:!1,children:(0,S.jsx)(p.default,{style:X.popularWrapper,children:u.map((function(t){return(0,S.jsx)(f.default,{onPress:function(){return e.navigate("InboxDetailScreen",{item:t.sender})},children:(0,S.jsxs)(p.default,{style:[X.popularCardWrapper,{marginTop:1==t.id?10:20}],children:[(0,S.jsx)(p.default,{children:(0,S.jsx)(p.default,{children:(0,S.jsxs)(p.default,{style:X.popularTitlesWrapper,children:[(0,S.jsx)(s.default,{style:X.popularTitlesTitle,children:t.sender.name}),(0,S.jsxs)(s.default,{style:X.popularTitlesTitle,children:[t.sender.age," tahun"]}),(0,S.jsx)(s.default,{style:X.popularTitlesTitle,children:t.sender.profesi}),(0,S.jsx)(s.default,{style:X.popularTitlesTitle,children:t.sender.domisili})]})})}),(0,S.jsx)(p.default,{style:X.popularCardRight,children:(0,S.jsx)(g.default,{source:{uri:t.sender.photoURL},style:X.popularCardImage})})]})},t.id)}))})})}):(0,S.jsx)(p.default,{})};var X=a.default.create({buttonText:{color:"white",fontWeight:"500",fontSize:14},buttonProfile:{backgroundColor:"#85586F",width:"60%",padding:15,borderRadius:10,alignItems:"center"},container:{flex:1,backgroundColor:"#D8CBBB",flexDirection:"column",alignItems:"center"},logoContainer:{flex:.5,justifyContent:"center",alignItems:"center"},logo:{width:98,height:94},button:{backgroundColor:"#0782F9",width:"60%",padding:15,borderRadius:10,alignItems:"center",marginTop:40},headerWrapper:{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,paddingTop:20,alignItems:"center"},profileImage:{width:40,height:40,borderRadius:40},titlesWrapper:{marginTop:30,paddingHorizontal:20},titlesSubtitle:{fontSize:16,color:"black"},titlesTitle:{fontSize:32,color:"black",marginTop:5},searchWrapper:{flexDirection:"row",alignItems:"center",paddingHorizontal:20,marginTop:30},search:{flex:1,marginLeft:10,borderBottomColor:"white",borderBottomWidth:2},searchText:{fontSize:14,marginBottom:5,color:"black"},popularWrapper:{paddingHorizontal:20},popularTitle:{fontSize:16},popularCardWrapper:{backgroundColor:"white",width:250,height:130,borderRadius:25,paddingTop:20,paddingLeft:20,flexDirection:"row",overflow:"hidden",shadowColor:"black",shadowOffset:{width:0,height:2},shadowOpacity:.05,shadowRadius:10,elevation:2,position:"relative"},popularTopWrapper:{flexDirection:"row",alignItems:"center"},cardheader:{flexDirection:"row",flex:1,justifyContent:"space-between"},popularTopText:{marginLeft:10,fontSize:14},popularTitlesWrapper:{marginTop:10,flexDirection:"column"},popularTitlesTitle:{fontSize:10,color:"black",flexDirection:"column"},popularCardBottom:{flexDirection:"row",alignItems:"center",marginTop:10,marginLeft:5},detailButton:{backgroundColor:"#85586F",paddingHorizontal:20,paddingVertical:8,borderTopRightRadius:5,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,marginBottom:20},buttonName:{color:"#F5F5F5",fontSize:12},ratingWrapper:{flexDirection:"row",alignItems:"center",marginLeft:20},rating:{fontSize:12,color:"black",marginLeft:5},popularCardRight:{position:"absolute",right:5,top:20,bottom:0,overflow:"hidden"},popularCardImage:{width:90,height:90,borderRadius:75,marginRight:15},asalDaerah:{fontSize:12,color:"black",flexDirection:"column"}}),Y=r(8754);const J=function(){var e=B(),t=(0,d.useState)(""),r=(0,n.default)(t,2),a=r[0],o=r[1],i=(0,d.useState)(""),l=(0,n.default)(i,2),u=l[0],f=l[1],m=(0,d.useState)(""),b=(0,n.default)(m,2),j=b[0],y=b[1],T=(0,d.useState)(""),v=(0,n.default)(T,2),C=v[0],k=v[1],z=(0,d.useState)(""),F=(0,n.default)(z,2),D=F[0],P=F[1],L=(0,d.useState)(""),I=(0,n.default)(L,2),W=I[0],O=I[1],H=(0,d.useState)("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"),E=(0,n.default)(H,2),A=E[0],V=E[1],U=(0,d.useState)(null),N=(0,n.default)(U,2),_=N[0],q=N[1],M=(0,d.useState)(!1),G=(0,n.default)(M,2),K=G[0],Q=G[1],X=function(){var t=(0,h.default)((function*(){var t=(0,x.doc)(R,"dataBaru",e.uid),r={name:a,gender:u,age:j,domisili:C,profesi:D,deskripsi:W,photoURL:A,userID:e.uid};yield(0,x.setDoc)(t,r),w(_,e,Q)}));return function(){return t.apply(this,arguments)}}();return(0,d.useEffect)((function(){null!=e&&e.photoURL&&V(e.photoURL)}),[e]),(0,S.jsxs)(p.default,{style:Z.container,children:[(0,S.jsx)(g.default,{style:Z.profilePic,source:{uri:A}}),(0,S.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&q(e.target.files[0])}}),(0,S.jsx)(s.default,{style:Z.attribute,children:"Gender"}),(0,S.jsx)(s.default,{style:Z.name}),(0,S.jsxs)(p.default,{style:Z.biodata,children:[(0,S.jsx)(p.default,{style:Z.valuebox,children:(0,S.jsxs)("select",{value:u,onChange:function(e){f(e.target.value)},children:[(0,S.jsx)("option",{value:"",children:"Pilih gender"}),(0,S.jsx)("option",{value:"Perempuan",children:"Perempuan"}),(0,S.jsx)("option",{value:"Laki-laki",children:"Laki-laki"})]})}),(0,S.jsx)(s.default,{style:Z.attribute,children:"Nama"}),(0,S.jsx)(p.default,{style:Z.valuebox,children:(0,S.jsx)(c.default,{placeholder:"nama",value:a,onChangeText:function(e){return o(e)}})}),(0,S.jsx)(s.default,{style:Z.attribute,children:"Umur"}),(0,S.jsx)(p.default,{style:Z.valuebox,children:(0,S.jsx)(c.default,{placeholder:"Umur",value:j,onChangeText:function(e){return y(e)}})}),(0,S.jsx)(s.default,{style:Z.attribute,children:"Asal Daerah"}),(0,S.jsx)(p.default,{style:Z.valuebox,children:(0,S.jsx)(c.default,{placeholder:"Domisili",value:C,onChangeText:function(e){return k(e)}})}),(0,S.jsx)(s.default,{style:Z.attribute,children:"Profesi"}),(0,S.jsx)(p.default,{style:Z.valuebox,children:(0,S.jsx)(c.default,{placeholder:"Profesi",value:D,onChangeText:function(e){return P(e)}})}),(0,S.jsx)(s.default,{style:Z.attribute,children:"Deskripsi"}),(0,S.jsx)(p.default,{style:Z.valuebox,children:(0,S.jsx)(c.default,{placeholder:"Deskripsi singkat tentang anda",value:W,onChangeText:function(e){return O(e)},style:Z.attributeval})}),(0,S.jsx)(Y.default,{style:Z.buttonProfile,disabled:K||!_,title:"SAVE",onPress:X})]})]})};var Z=a.default.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#FFFFFF"},profilePic:{width:150,height:150,borderRadius:75,marginBottom:20},name:{fontSize:24,fontWeight:"bold",marginBottom:10},bio:{fontSize:16,textAlign:"center",paddingHorizontal:20},filecontainer:{},valuebox:{backgroundColor:"#EFF0F2",paddingHorizontal:10,paddingVertical:8,borderTopRightRadius:5,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,width:300,marginBottom:10},attribute:{font:"Poppins",fontSize:15,fontWeight:500,textAlign:"left",marginBottom:3},attributeval:{font:"Poppins",fontSize:15,fontWeight:300,textAlign:"left"},biodata:{flex:1,flexDirection:"column",justifyContent:"right"},buttonProfile:{backgroundColor:"#85586F",paddingHorizontal:10,paddingVertical:8,borderTopRightRadius:5,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,width:300}});const $=function(){(0,l.useNavigation)();var e=(0,I.useFonts)({PoppinsLight:_});if(!(0,n.default)(e,1)[0])return(0,S.jsx)(p.default,{});return(0,S.jsxs)(p.default,{style:ee.container,children:[(0,S.jsx)(p.default,{style:ee.cardheader}),(0,S.jsx)(L.default,{contentInsetAdjustmentBehavior:"automatic",showsVerticalScrollIndicator:!1,children:(0,S.jsxs)(p.default,{style:ee.popularWrapper,children:[(0,S.jsx)(p.default,{style:ee.popularCardWrapper,children:(0,S.jsxs)(p.default,{style:ee.popularTitlesWrapper,children:[(0,S.jsx)(s.default,{style:ee.tanggal,children:"21 Mei 2023"}),(0,S.jsx)(s.default,{style:ee.popularTitlesTitle,children:"Permintaan taaruf sedang diproses."})]})}),(0,S.jsx)(p.default,{style:ee.popularCardWrapper,children:(0,S.jsxs)(p.default,{style:ee.popularTitlesWrapper,children:[(0,S.jsx)(s.default,{style:ee.tanggal,children:"22 Mei 2023"}),(0,S.jsx)(s.default,{style:ee.popularTitlesTitle,children:"Permintaan taaruf diterima."})]})}),(0,S.jsx)(p.default,{style:ee.popularCardWrapper,children:(0,S.jsxs)(p.default,{style:ee.popularTitlesWrapper,children:[(0,S.jsx)(s.default,{style:ee.tanggal,children:"22 Mei 2023"}),(0,S.jsx)(s.default,{style:ee.popularTitlesTitle,children:"Sedang dialokasikan pendamping taaruf."})]})}),(0,S.jsx)(p.default,{style:ee.popularCardWrapper,children:(0,S.jsxs)(p.default,{style:ee.popularTitlesWrapper,children:[(0,S.jsx)(s.default,{style:ee.tanggal,children:"24 Mei 2023"}),(0,S.jsx)(s.default,{style:ee.popularTitlesTitle,children:"Pendamping taaruf (Iwan: 0899999999) telah menghubungi anda melalui WhatsApp."})]})})]})})]})};var ee=a.default.create({container:{flex:1,backgroundColor:"#D8CBBB",flexDirection:"column",justifyContent:"center",alignItems:"center"},cardheader:{flexDirection:"row",justifyContent:"space-between"},headerWrapper:{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,paddingTop:20,alignItems:"center"},profileImage:{width:40,height:40,borderRadius:40},titlesWrapper:{marginTop:30,paddingHorizontal:20},titlesTitle:{fontFamily:"arial",fontSize:32,color:"black",marginTop:5},popularWrapper:{paddingHorizontal:20},popularTitle:{fontFamily:"arial",fontSize:16},popularCardWrapper:{backgroundColor:"#FFFFFF",paddingHorizontal:10,paddingVertical:8,borderTopRightRadius:5,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,width:300,marginBottom:10,marginTop:10},popularTopWrapper:{flexDirection:"row",alignItems:"center"},popularTitlesWrapper:{flexDirection:"column"},popularTitlesTitle:{fontSize:10,color:"black",flexDirection:"column"},tanggal:{fontSize:10,color:"#6E485B",flexDirection:"column"},popularCardRight:{position:"absolute",right:5,top:20,bottom:0,overflow:"hidden"},popularCardImage:{width:90,height:90,borderRadius:75,marginRight:15}});const te=function(e){var t=e.route.params.item,r=(0,l.useNavigation)();return(0,S.jsx)(p.default,{children:(0,S.jsx)(L.default,{contentInsetAdjustmentBehavior:"automatic",showsVerticalScrollIndicator:!1,children:(0,S.jsxs)(p.default,{style:re.container,children:[(0,S.jsx)(g.default,{style:re.profilePic,source:{uri:t.photoURL}}),(0,S.jsx)(s.default,{style:re.name}),(0,S.jsxs)(p.default,{style:re.biodata,children:[(0,S.jsx)(s.default,{style:re.attribute,children:"Nama"}),(0,S.jsx)(p.default,{style:re.valuebox,children:(0,S.jsx)(s.default,{style:re.attributeval,children:t.name})}),(0,S.jsx)(s.default,{style:re.attribute,children:"Umur"}),(0,S.jsx)(p.default,{style:re.valuebox,children:(0,S.jsx)(s.default,{style:re.attributeval,children:t.age})}),(0,S.jsx)(s.default,{style:re.attribute,children:"Asal Daerah"}),(0,S.jsx)(p.default,{style:re.valuebox,children:(0,S.jsx)(s.default,{style:re.attributeval,children:t.domisili})}),(0,S.jsx)(s.default,{style:re.attribute,children:"Profesi"}),(0,S.jsx)(p.default,{style:re.valuebox,children:(0,S.jsx)(s.default,{style:re.attributeval,children:t.profesi})}),(0,S.jsx)(s.default,{style:re.attribute,children:"Deskripsi"}),(0,S.jsx)(p.default,{style:re.valuebox,children:(0,S.jsx)(s.default,{style:re.attributeval,children:t.deskripsi})})]}),(0,S.jsx)(f.default,{style:re.detailButton,onPress:function(){return r.navigate("Request Sent",{item:t})},children:(0,S.jsx)(s.default,{style:re.buttonText,children:"Terima Taaruf"})})]},t.id)})})};var re=a.default.create({buttonText:{color:"white",fontWeight:"500",fontSize:14},detailButton:{backgroundColor:"#85586F",paddingHorizontal:20,paddingVertical:10,borderTopRightRadius:5,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,marginBottom:10,marginRight:5,marginTop:10},detailButtonBack:{backgroundColor:"#D8CBBB",borderColor:"black",paddingHorizontal:20,paddingVertical:10,borderTopRightRadius:5,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,marginBottom:10,marginRight:5},buttonTextBack:{color:"#6E485B",fontWeight:"500",fontSize:14},container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#FFFFFF"},profilePic:{width:150,height:150,borderRadius:75,marginBottom:20,marginTop:10},name:{fontSize:24,fontWeight:"bold",marginBottom:10},bio:{fontSize:16,textAlign:"center",paddingHorizontal:20},filecontainer:{},valuebox:{backgroundColor:"#EFF0F2",paddingHorizontal:10,paddingVertical:8,borderTopRightRadius:5,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,width:300,marginBottom:10},attribute:{fontSize:15,fontWeight:500,textAlign:"left",marginBottom:3},attributeval:{fontSize:15,fontWeight:300,textAlign:"left"},biodata:{flex:1,flexDirection:"column",justifyContent:"right"}}),ae=(0,i.default)(),oe=(0,F.default)();function ie(){return(0,S.jsx)(o.default,{children:(0,S.jsxs)(ae.Navigator,{children:[(0,S.jsx)(ae.Screen,{options:{headerShown:!1},name:"Login",component:k}),(0,S.jsx)(ae.Screen,{options:{headerShown:!1},name:"HomeTab",component:ne}),(0,S.jsx)(ae.Screen,{name:"DetailScreen",component:U}),(0,S.jsx)(ae.Screen,{name:"Request Sent",component:q}),(0,S.jsx)(ae.Screen,{name:"Progress",component:$}),(0,S.jsx)(ae.Screen,{name:"EditProfileScreen",component:J}),(0,S.jsx)(ae.Screen,{name:"InboxDetailScreen",component:te})]})})}function ne(){(0,l.useNavigation)();return(0,S.jsxs)(oe.Navigator,{initialRouteName:"Home",screenOptions:{tabBarActiveTintColor:"#85586F"},children:[(0,S.jsx)(oe.Screen,{name:"Home",component:H,options:{tabBarLabel:"Home",tabBarIcon:function(e){var t=e.color,r=e.size;return(0,S.jsx)(D.default,{name:"home",color:t,size:r})}}}),(0,S.jsx)(oe.Screen,{name:"Request Inbox",component:Q,options:{tabBarLabel:"Inbox",tabBarIcon:function(e){var t=e.color,r=e.size;return(0,S.jsx)(D.default,{name:"message",color:t,size:r})},tabBarBadge:2}}),(0,S.jsx)(oe.Screen,{name:"Profile",component:A,options:{tabBarLabel:"Profile",tabBarIcon:function(e){var t=e.color,r=e.size;return(0,S.jsx)(D.default,{name:"account",color:t,size:r})}}})]})}a.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},7435:(e,t,r)=>{e.exports=r.p+"static/media/logoNadee1.2cfc41e18ed187ef7036.png"}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,a,o,i)=>{if(!a){var n=1/0;for(s=0;s<e.length;s++){for(var[a,o,i]=e[s],l=!0,d=0;d<a.length;d++)(!1&i||n>=i)&&Object.keys(r.O).every((e=>r.O[e](a[d])))?a.splice(d--,1):(l=!1,i<n&&(n=i));if(l){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[a,o,i]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var o,i,[n,l,d]=a,u=0;if(n.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(d)var s=d(r)}for(t&&t(a);u<n.length;u++)i=n[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(s)},a=self.webpackChunkweb=self.webpackChunkweb||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=r.O(void 0,[259],(()=>r(8887)));a=r.O(a)})();
//# sourceMappingURL=main.55809939.js.map