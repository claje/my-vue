<template>

    <nav>
        <div class="brand">
            <img class="logo" src="@/assets/acs logo.jpg" alt="Alarcon Construction Supply logo" />
            <div class="brand-text">
                <span class="brand-name">Alarcon Construction Supply</span>
                
            </div>
        </div>


        <div class="nav-right"></div>
        <ul>
            <li><router-link to="/" active-class="active">Home</router-link></li>
            <li><router-link to="/About_us" active-class="active">About</router-link></li>
            <li><router-link to="/Products" active-class="active">Products</router-link></li>
            <li><router-link to="/Services" active-class="active">Services</router-link></li>
            <li><router-link to="/Projects" active-class="active">Projects</router-link></li>
            <li><router-link to="/FAQs" active-class="active">FAQs</router-link></li>
            <li><router-link to="/Contact" active-class="active">Contact</router-link></li>
            <li><router-link to="/Sample" active-class="active">Sample</router-link></li>
            <li><router-link to="/SampleMethod" active-class="active">Sample Method</router-link></li>
            <li><router-link to="/SampleVmodel" active-class="active">Sample VModel</router-link></li>
        </ul>

        <div class="portal-btn">Get a Quote</div>

    </nav>

</template>

<style scoped>
    nav {
        display: flex;
        align-items: center;
        padding: 18px 6%;
        background-color: white;
        flex-wrap: nowrap;
        gap: 1rem;
        box-shadow: none;
    }

    .brand {
        display: flex;
        align-items: center;
        gap: .7rem;
        flex: 0 0 auto;
    }

    .logo {
        width: 64px;
        height: 64px;
        object-fit: contain;
        border-radius: 6px;
    }

    .brand-text {
        display: flex;
        flex-direction: column;
    }

    .brand-name {
        font-size: 16px;
        font-weight: 700;
        color: #3a0e6b;
        line-height: 1.2;
    }

    .brand-tagline {
        font-size: 12px;
        color: #d4ab1e;
        line-height: 1.2;
    }


    nav ul {
        display: flex;
        list-style: none;
        gap: 2rem;
        margin: 0 auto;
        padding: 0;
        justify-content: center;
        flex: 1 1 auto;
        align-items: center;
    }


    .nav-right {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        flex: 0 0 auto;
    }


    .portal-btn {
        background: #3a0e6b;
        color: white;
        border: none;
        padding: 10px 18px;
        border-radius: 8px;
        font-weight: 700;
        box-shadow: 0 6px 18px rgba(58,14,107,0.12);
    }


    nav a {
        text-decoration: none;
        color: #1d1d3d;
        font-weight: 500;

    }

    nav a.active {
        color: #3a0e6b;
        font-weight: 700;
        position: relative;
    }

    nav a.active::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: 4px;
        background: #3a0e6b;
        border-radius: 2px;
        bottom: -10px;
        width: 36px;
        margin: 0 auto;
    }

    nav a:hover {
        color: #4e2ee0;
    }


    .nav-right .search {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        color: #6b6b6b;
        border: 1px solid transparent;
        margin-right: 8px;
    }

    @media (max-width: 900px) {
        nav {
            padding: 12px 4%;
        }

        .brand-text { display: none; }

        nav ul { display: none; }

    }
    






</style>