// nav_bar

  // var

    let tgl = document.querySelector(".toggle")
    let alrt = document.querySelector(".alert")
    let swtx = document.querySelector(".switch")
    let img = document.querySelector(".logo_img")
    let nav_ovrly = document.querySelector(".overlay_2")
    let alrt_ovrly = document.querySelector(".overlay_1")
    let theme = document.querySelector('meta[name="theme-color"]')

  // func

    tgl.addEventListener("click", () => {
      if (nav_ovrly.style.height === "100%") {
        nav_ovrly.style.height = "0"
      }
      else {
        nav_ovrly.style.height = "100%"
      }
    })

    nav_ovrly.addEventListener("click", () => {
      if (tgl.checked === true) {
        tgl.checked = false
        nav_ovrly.style.height = "0"
      }
    })

    swtx.addEventListener("click", () => {
      document.body.classList.toggle("drk");
      if (img.getAttribute("src") === "assets/png/logo_lit.png") {
        img.src = "assets/png/logo_drk.png"
        localStorage.setItem("theme","drk")
        theme.setAttribute("content","#123")
        if (localStorage.getItem("alert") != "true") {
          alrt.style.display = "flex"
          alrt_ovrly.style.display = "block"
        }
      }
      else {
        img.src = "assets/png/logo_lit.png"
        localStorage.setItem("theme","lit")
        localStorage.setItem("alert","true")
        theme.setAttribute('content','#fdf5e2')
      }
    })

  // cond

    if (localStorage.getItem("theme") === "drk") {
      img.src = "assets/png/logo_drk.png"
      document.body.classList.toggle("drk")
      theme.setAttribute('content',  '#123')
    }





// alert

  // var

    let crs_1 = document.querySelector(".cross:nth-child(1)")

  // func

    crs_1.addEventListener("click", () => {
      alrt.remove()
      alrt_ovrly.remove()
    })





// ad

  // var

    let ad = document.querySelector(".ad")
    let ad_fl = document.querySelector(".ad_flex")
    let crs_2 = document.querySelector(".cross:nth-child(2)")

  // func

    crs_2.addEventListener("click", () => {
      ad.remove()
      ad_fl.remove()
      sessionStorage.setItem("cross","true")
    })

  // cond

    if (sessionStorage.getItem("cross") === "true") {
      ad.remove()
      ad_fl.remove()
    }





// code

  // var

    let copy = Array.prototype.slice.call(document.querySelectorAll(".copy"))
    let txt = Array.prototype.slice.call(document.querySelectorAll(".code_cont"))

  // loop

    copy.forEach(function(cp, idx) {
      cp.addEventListener("click", () => {
        txt[idx].select()
        navigator.clipboard.writeText(txt[idx].value)
      })
    })

// drop_dwn

  // var

    let set = document.querySelector(".set")
    let settings = document.querySelector(".settings")
    let set_chk = document.querySelector(".set_check")
    let top_nav_ovrly = document.querySelector(".overlay_3")
    let set_flex = document.querySelector(".flex:nth-child(2)")

  // func

    settings.addEventListener("click", () => {
      set.classList.toggle("enlarge_1")
      set_chk.classList.toggle("enlarge_2")
      set_flex.classList.toggle("enlarge_3")
    })
    set_chk.addEventListener("click", () => {
      if (set_chk.checked === true) {
        localStorage.setItem("blur","false")
        nav_ovrly.style.backdropFilter = "blur(.5rem)"
        alrt_ovrly.style.backdropFilter = "blur(1rem)"
        top_nav_ovrly.style.backdropFilter = "blur(1rem)"
      }
      else {
        localStorage.setItem("blur","true")
        nav_ovrly.style.backdropFilter = "none"
        alrt_ovrly.style.backdropFilter = "none"
        top_nav_ovrly.style.backdropFilter = "none"
      }
    })

  // cond

  if (localStorage.getItem("blur") === "true") {
    set_chk.checked = false
    nav_ovrly.style.backdropFilter = "none"
    alrt_ovrly.style.backdropFilter = "none"
    top_nav_ovrly.style.backdropFilter = "none"
  }
  else {
    set_chk.checked = true
    nav_ovrly.style.backdropFilter = "blur(.5rem)"
    alrt_ovrly.style.backdropFilter = "blur(.5rem)"
    top_nav_ovrly.style.backdropFilter = "blur(1rem)"
  }