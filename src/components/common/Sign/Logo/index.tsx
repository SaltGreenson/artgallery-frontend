import React from "react";

const Logo = () => (
  <svg
    version="1.2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 246 247"
    width="60"
    height="61"
  >
    <defs>
      <image
        width="246"
        height="247"
        id="img1"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAAD3CAYAAAAuTqltAAAAAXNSR0IB2cksfwAAHmFJREFUeJztnQmYHVWVxwMkRAVBmGEQ8XPUUWDEceYbHdlc2MSIwiAYQZaIMMYgw2JYAvgNaJAdURRQFEERg6AGZJEJKIPI3kk6na3TnU7Sne5OdzqhQ3e/fq9ubXfOeVUdXpK31Huvqs6pqvP/vt/3KZDOueeef9etW3eZNEmUeKmWT+4E7AHsDxwEHAIcC5wETK/ASf5/83H/z+zv/4ydqNsjEqVaYLLJwLuBQ30zXgTcCjwIPAesBDYBNqBDwvZ/5kr/73jQ/zsv9GM41I9pMnV+RCLW8p+4e/lPzhOAy4FfAi1AL/AG4IRo3kZx/Fh6/dh+6cd6gh/7XvLEF2VaYIDdgU8AVwDPAxsAk4F5G8X02/BXYA5wOLaROs8iUWTyn8j4RLsYeMAf5oY5fOaK7bf1Ab/tB8oTXZRoQQG/Q3kTU5cBTwODgMvAbFS4fg4WAJf6uXkHdT+JRDUFhboL8FHgdqBPZeOp3CiYG3xX/6Gfs12o+08k2iooyLco77PRT4EhBoZJKhv9HGIup1L3qyiDgsKbAnxIecPsDQxMkTb6/dxijqdQ97co5VLe0/lc5X3qyTMwQNrJ+7nGnMtTXBSeoKCQDwK3AesZFHtWwdx/H/gA9olI1JCU94nqI8B9SibBOGH7ffIvSj6dieqR8tZaPwIYDApZKI/h99HHqetFxFjK+1SFq6UeVcleAZY1lN9nuIZdPpmJPClvyP1vwB8ZFKnQHH/0+1KG6FmW8ibFfqNkyJ0mDL9PP0hdX6KYBZ2+n/JWPI0wKEQhGrBvf4B9TV1voogFnfw24JvAZgaFJ8QDrgY8D/ueuv5EEQg69jBgueKxr1mIF+zzpcBh1HUoCknQmfsAdwMFBgUm0II1cBewN3VdihqU8laMHam8Y36oC0rgRY/yaoO6TEX1SHnv0rhTSGa7hUpgbWCNyLt3EgQd9UmglUHhCMkAa+Vw6roVVRB0zluBKwGLQbEIyQJrBmvnrdR1LCqR8s7Sekll++ghoTmwdrCGDqCu58wLOmFn4EwlE2RCeGAtYU3tTF3fmRQk/u3KW1kkT2khbLCmblFyfHK8goT/A/AigwIQ0s0LwN9T13smpLxja7sZdLqQDdYq2fMdrZR3lYx8mxbiBmvuROr6T52Ut2f6EiUHCAp0YO3NVrLXOxwp76jfG5ScOybQgzWItShHIjcj5Zn6XgYdKgilYE3uSu2PREp5l7DPZ9CJglAOrM23U/skUVLeCSd/YtB5glCNJ5Sc0BJMyrul8jUGnSYIQcBalVtDqwkS9C5gEYPOEoR6WAi8k9o/LKU8U/+ZQSeVJd92lrb779XO8LPaMvO6VM7Iq8V/nl81WxcWHk0ea+LouFyrjU9qe/h57TrG1rwW7IIeHn5B24N/0Pnl36CPszpYu++i9hErQUJ2U1yXiC7/qs5v+L0OKtsqaLN/nh5tm67HWz5FHz9TjCWnaGvdjXqgMBA8t2MrtNnxLa0WHkUefwX+BuxG7ScWUt5mjgUMOmUHCoNPadfO1664MsKnTX74VW22nkDeDm4UBhdoxxpvKK/wSNdquIVzXrGWsz1bDgnYHbifQWdsg9k+S5u5NY0VXhlZ3beRt4kDZvsF2lUbw8mpmdNW19XkbaoA1nQ2d4Ypby/17xl0wrbFt+JcGPPlQim+UrmjrTCEzO77t913d+g5Rdnrf0zetgr8QWVtT7fyLpDHu45Z7aU2ls6IxNQTcra8oNXiaeTtjJ3uOyLLqXZNvb79Mvo27gjWNtb4VGq/xSZo7EzF7eB+MJwJ78RRi/ETJhLM5WfBsLnB9+mAMs0xbbadQt7WMuDa8q9T+y0WQUO/BIwxSPqbwBDZGV0cafFNyHVMzhM/oefVHlsZT17h3d1cdiZ9m3cEa/1kat9FKmjgQcq7S4k62dtgdX8fSyOWAkThN2/qNseS19VXxZbTYl5f/wt5myswABxI7b9IpLyrdloYJHkHwpqpDSx4j2c6dAwVY0ub5PVNsPbTdcwSNGiq8mYJqZO7A7hIgkLWmmvJ2x4lY61fJskrrgKkbnsVHlJpmUxT3h1aNyuGB/nju66bX0dSgMam50Jvj9HyaW20nVqcsMJv8bgEthJmx8XefwcUWsL/DGetvZ4kryhsE3VtVcDyvUBty+alvOtrWZ5TZq6ZS1Z8qFDagLPOXVd7a9iH/6YtNVZ/HMOveH8eRi/4CyGMuOzNT0eQsWCy+u8nr60qoBeSfaUQNOB9ivFh/jhso1Ru8ZfrjtloORLMd37RiFEKc4OTX8aixr67G6OrI42vmooz5HzftbXvifdR+7MhQeC7Ar9jkMTy4DDcGiYrPpSq4z3bXHGONvsf0E5hvXZdJ7YY7cKgtgce1IXls+paOUctq+vb9DVWHfRG8o5XgqC/BpgMEljeKJ1zqGtPj/c+XDtOGBoXn84RrogLKueNV4rD9Zr5hfd8almDfyCvsRqgN86m9mldgoA/CCgGyatI1EPZQMU3/EL5+BZP03bPbdo1t1CHWFa4kszZOL/iQhscWVDLyfcUJxOp66wGBfQKtV8DCQLdG3iKQdKqMjzeQ1172rEL25gD/zcuOY39u3qjsrZoZ9MT2lx62pu5xdVmObr36wnZVl4XlnyJvM4CgF7Zm9q3NQVBXs4gWVUZbzmOuu62Co1RNPW6m8g+vTUteE0YWHNLcd4iv/o66mi2ivFnr+25jNq3VQUBHgyMMEhUVYaWz6SuOVEMKmyYT15rAUHPfIjav2WlvK2YiTiI0Fp9JXXNiWJQwtbk44GI/FalQVBfZZCcYMbu+jZ1zYlikL15AXmt1cnp1D7eRsrbtTXAIDGByC39GnXNiWIQftKkrrU6QQ/9M7Wfi1LeEUe/ZpCUusB90aIUy3W47s+uBZ6XRn+kEgTxMSDHICH1MdpBXXqiCGUbm3Vh0fH0dVY/eDDDR6lNvQuwjEEy6gY3CojSq8Lm58lrrAnaFNVTW3nbMU9nkISGwEUVeBCeKJ1KwdlypymK7Z3wl74TWMIgAQ3j5sM7O1zESwlanFKJVmBfCmPPZdD4psDf6qL0aWI1Xwq4Nm5T4/3VvQwa3hSUJ6iIolMKntYT9Kk479+Gv+wmBo0OBXlqp0vu2HLymgqZm+Iy9b6K8T7rhsxtDFHXoygE4a64FN60gtuf94na1LgY5TsMGhsqOHRzjT7quhQ1IzunrbWpPfn1GhXl5y/44e8H1jNoaPjmbp+VnH3Qoh3E+ObNMOhWUZ6RBj/8ewwaGZ25205hcQSRqA65prZWX0FeOzEwNypT7wWsYdDAaM2NZ21vieceL1FzwomyjJga6QL2jMLY5yhm195GBp45lqQjijImE09OHXyI+xHDYYPeOztsU+NRwn0MGhc7xvKvi8EZyeq4hLwmCMG1I1PCNPbxDBpFAs60yppyPsIndT3nm6eQ48Iy9WRgHoMGxU/7hdq189S1LNpO1oZf09cGHejFyWEY+xAgz6BBsVJYOkNbpsyQc1TOGteDnT8irxEi0IuHhmHsGxk0JlZwSyfOuIr4yrHN0C4QTCA3NGtqPHm0nUFD4mPxNNkYkhTharNVF9LXTPygJ9/SjLE/B9gMGhIbrjFAXa6iOuRao1otOYm8bmIGPTmtGWM/zqAR8YBX0/TfS12nogbkjramcfNHLR5t1NRvVynbxVUNnGkVJVfGxj/pQrY+gxnA7o0Y+wwGwcdDxxXasRV1bYqaFI64yGspXk5rxNj3Mwg8cozl58rGj7QIN4QEub87PfyqXlPjopQhBoFHC64JH5ENH6kS/JLO0Bpy9GjwxSrwH5/JIOjIwUPvROmTueW1LE2mnRHU1MjvGAQcLWtu0NqR9+q0yu77GX2NxQN6NZCx91QpPSVlAhyqOXJ3V7qVnQMY0Kt7BDH2EYDDIOBIMBafqM1cN3XZieKQa2XhfRu9engQY89hEGxkyCKUbEkNPpaFbZ5zghj7NQaBRgOuA5dDEzKnDBzO8FItU7+bQZCR4Yy2UteYiEBOoTcLs+T7VzP2dAYBRkPnHOr6EhGq0P8wfQ1Gy0nVjH0bgwDDB4fgsr8680r5RFrlq4BUSt+v7Y2PUNeUiIGc0SVpHpK/WMnUU4EcgwBDBY84cqxx6poSMVFh3e3kNRkRY8Cu5Yx9FIPgQseWCTNRiVxjQ5qf2jsuQVMpuhp3AjwTSyTaXineAXZ9OWM/ySCwUHFe/zN1DYk4ytqS1qf2E9ubGm/66GAQWGjgHVwiUSXhFU7UNRoBq1TpNk7lLUwZYRBYaDgjr1LXjoixcAUidY1GwDCwX6mxP6pSdOGesfKbci2PqKZU32/IazVkcEPIv5ca+3QGQYXG+OuyGEVUW649rtWS1C1aObXU2NcxCCgUrJ7bqOtFlCA5r/+FvGZDZm6psR9jEFAoOOMd1LUiSpjU0q+Q122IPFpq7FScmCIz4aJGlLIZ8vUTpn4Hg2BCQWbCRY0oZTPkOAm+Oxr7wwyCaZo3ls2grg9RgmX2/4q8hkPkYDT2sQwCaZqRnjuoayOQXLtQPJ4pv2p28dVhAqP7juIdVImUtUVbvT/RhRXnbW1Pf9vZxXbahX7q6ALJznWS13CIHIvGPptBIE1hLP4CdV3UlJkfrLlG2Vh4jDZ776YOtS45w8/q3ML/rNouXLPvjq+mDrWmrI7Z5LUcEmehsS9nEEhTbF7H+xOXPdJaV3twMse28tRhV5fraGfL83W1y9k4v/jnuMoYeo68lkPiMjT2zQwCaQrOF9XbfXfrQssxdbfJWHMddehVVTT1wqPqbpfZ8S3q0KsKXyOo6zkEbkJj38sgkIaxuq6mroWKavb2R66z/E3PInfi7aY8l/zagw+R13QI3IPGfpRBIA3D9WltbH5RFxYe11TbzJU895NbvXc33W/O0GPUzago6poOgUfQ2M8yCKSxwl96GtvNHvnWL4XSRo5P7VD2Mrd+nu2Emt1zG3ltN8mzaOxFDAJpCJxl5qgwL2C3en5A3ZxthLPgYbWN6wk3+MuUurabZBEau5NBIA3B8ruvtUWbrSeEV/zMlsninEaYfWgVNlE3aUeF3IcEdKKx+xgEkviCn1CYT7QJOCnsWeNc96+pm1RWYf8Ci5leNPYwg0DqBr/1clSYw/AJ8JcFB7nWiFZLqi9GqZcs/YKOkc1o7HEGgdRf7AwnlVBRfAflckMofoGIoi+5ftlI8IGHOTS2ySCQuuEqMXb9cDV2gofjJhrbYhBIXeTX/JC6zytKjJ0eY6vBx8lrvUGsSQyCqL/QNz9N3ecVFYWxi2usGcgxhrSxKPzhKVdj27lV5LXeKGjsRJ1Oml94rLYKG6j7vKKiMDYnRdE+rsZGjbScTF7zDeAm7h07v/wb1H1dVbgnOcz2bmo7jbpJ28hae324fYpXHKuN1M2qKNWfyLXjZuKMzeV9s5LM/gdCbu8vqJu0jXBRUJjts1ZdSN2kqopqXiFiDDT2KINAAuOaDFcqlSjskzg4DlPDHI4bw4uom1NdjqHNpaeS132djKCxhxgEEpgkKN91ayhtdTY9Qd2UsjJz3eGYuv1i6qYEUgL3aA+hsbsZBBIIznuvtxducGimrTbziw+cLS9otfDohtuHO/M4jkbKKYrVhBHTjcZeySCQ1BkbxuTaavC8aq5P6u1lvtHa0NPM7Lxcu0YfdfiBlUBjr0Rjv8wgkGAFv/kZ6j6uW7j0NcgKJnPFf3kTg/ALIWnCX0S12mi0HAWGnqPNjY9Sh9uQqGu/Tl5GYy9gEEgwYzPZDNGMikfylqDgfTVVsrbs2EZjhDqqpkVd+3WyAI39MINAAqHtMer+FWVUZsfF5PVfBw+jse9kEEgwY4u2EW5dxSHwBDgkLo5qXLuBH5Yr/lmj9xfb/swEvv5EoYRtCLkTjT2XQSBi7Do10PvLqrnCE0CKQ+GBB7WbX1OcgS7FyXXAv5sXaGLI2PQcdXPJlTBjz0VjX8AgkJr0rbqcum9ZKc5CS9TXiIikNjxM7oE6uACNPZ1BIDXhvpQ0bqnRTm22nRJ97jvnaHdsOXVzyZWwE1Wmo7GPYBCIGLtBFTY+o832C8LN98Kjiz/TGWunbh4bJczYh6Gx388gEDF2k7LhnTnXeV3TeR7o+pHOj3dRN4edEmbs96KxpwCKQTBi7BD0+uD8xnK8eJp23niZOny2SpCx0ctTJqHgfyxlEJAYOyRZq6+oO79W//3UYbNWgozdOmlC8H9+wSAgMXZYck1trb02eG77fs72qiQuSpCx7yk19mwGAYmxQ1TO2KTXt36tZl5Hll6oXUdMXUsJMvbsUmMfzyAgMXbIQsMWv3eX214J79TW+ju128gqtQwqQcY+vtTYBynmRySJsRsXbpG0S7aQWr0/Z33OGEclxNg4cXZgqbH/DhhgEJgYOyKVFmZSDjjgpIQYewOwd6mxdwJeYxCYGDsibWvstdThJE4JMfar6OVJpYJ/cB+DwMTYEal0s4fV/X3qcBKnhBj7vknbC/7h+QwCq8j4imQcfMdRjm3owsqLtuaS64XznGX03kfugQCcX87Y72EQWFVEjQn3aW+fy4GcLButRwnZtvmecsZmf2Kp1i51/yZPrqnNFefukMvi/eKyKCWwzNVXkdd/Ddahh8sK/sWjDAKsiDPWRt2/iZO17saK+RwfeJw6vMTIWPwF8vqvwSPlXe0Z+xIGAVY2dgoOM4xN1paqpp6g+ORO4MmocYu69gNwSTVjf5JBgBUxun9M3b+0ssf8o43WaHu0TY8NLNjhRFBkvOOa4tFIQfOKBzYUuq4v+7Nyg/B3jC6Dv7PLO1LJyt4vAWv4BfLaD8AR1Yy9G1BgEGRZMntED14+AE9fc+VM8j4orJilrZ4fZmqRSwIuDEDP7lbR2L655zEItCJZFJ6SQp337bEHf0+dltiUgLu75lU1tW/sGQwCrUhhKIPv2a5ZPCEF72qeGCLjawkWXOTAKAE3i5QOz4tP64xsHsHbXVXr58nrvgYzghgbN4QYDIIti9Exh7qvRRmSsYnfaGk7cBh+YBBj41FJfE9UWXScdo0B6v4WZURq6Wn0NV8d9OqUmsb2zX07g4Ars/FJ6v4WZUBqdBl9rdfmB4FM7Rv7Y4DLIOiy4LufSBS18Loj6lqvAXr0Y4GN7Zu7jUHgFXFGFlP3uyjliuVChuZoq8vUvrGvZxB4ZbrmUve7KMUyhp6jr/HafK8RY3+CQeAVGW85Trt2gbr/RamUq62O2eQ1HoDDGzE2nqrSzyD4ipjrbqGuAFEKhXeVUdd2ANCbO9V2cnlz38CgAZWN3XpCcbODSBSmrFUXktd2AG5oyNS+sXGxSo5BIypS3J0kEoWk4WRs+EBPHtSMsXE4/iyDhlTFGXmVuh5EKZBjjSdhJlz7nmxsGF5i7pkMGlKV4ndtGZKLmpFrarU6EccfITObMrVv7PcC6xk0pirW2u9Rl4YowcJRH3UNB6QH+McwjI1cx6BBNcHZTJGobtk5PbaI/Q6uCa5Vlc42a8DcBwAWg0ZVpThLLsf8iOrUhs7vkNduQNCDB4Tj6jfN/RyDhtUks6esiBqSsfEx8pqtg+dCNbVv7I8rxscmlTK+6irtyNWwohpyRpcUbx2lrteAoPf+Iwpj4z7tRDy1jZYjdb5HrgQSVVZxdRn/k1FK+T8VdN91A+Y+k0EDA4M3YIhE2wu/VyfoST3BVyIxtW/sPfzfHNSNFHOLGpJrvq77FydiEUopuCBlj8iM7Zv7ywwaGpyFR2tn8wLqehIxkKM2a2tNYmbAS5keqal9Y08Gehk0tj5zy5M703LVRm0sDn6JAiNwcdjkyI3tm/uLKgHftbdHzJ1NFSfKkvdOrX2PnRyLqX1jvwV4hUHD60OG5ZkTmtrkf9JoJV5Cr8VmbN/cpwIOg8bXbW5r/V3U9SaKQTj8TuiTGsGDCqN/ty5j7KnA/QwS0BBWxyXatd6grj1RRErAfVu1QG9Njd3Yvrn/FVAMktAQm1bMlI0jaZNra6v3J8WRGXV9NQF66sMkpi4x9z0MEtE4MFTDIZsoBbJz2mw/n76mmuceUlP7xt4L6GKQjKbMrQYfpy5LURMqTpK1z6KvpeZBL+1F7euiIJBLVRIn0krBSTU8rEG2fSZLeBPp4ENJniQrBT10KbWft0p5S03/zCAxTVNoO11boyupy1UUQJY5rtXaW8hrJkSeUVEvHa1XyptIS9yilbLAb39bvnezFs6LJOTgwaDghNnB1D7eQco7QulOxfgyv7pY9Bltdt+mHWOIuoZFpcKh99CjaTM1euYOFdaRR2ELAtsdWMYgUaGBxy05w3+lLmeR9p7SvcvOJq+JCMA7rnen9m9VQYDHAiMMkhUqeOSSm19HXdvZlJ3TufV36aGWY8jrIAJGgWOofVtTytv99R0GCQufJV/U1sBvZeY8NrnaGW3T/UtOp+/76LhGxbV7q1kpb7npagZJi4TiclR5ekcr+OVpdd9anOug7u8IaQd2pfZrXVLevV8bGSQvMgqd10D9raa2QKrkWiPF79IpmxwrB3qj8fu3qKS8WfLLVNIXrtTAWPwFbay5WTu5VdSeSLbsMW30PaDVshnkfRoDju8Naps2JuXt236GQSKjN3jLUbpvzfXaNeUOsbrk2toeekybS75I3ocxgp6Id5912FLeWvK1DJIZC1te+5QeQYPLxpLqgnfo4lLQ1hPJ+yxm+KwFb1bQkBOBzQySGhv4jlj8RIbbQmUWfavsQn9xr7S54lzyPiIAPXACtR9DFTToPJWWVWkNmDzXMy/TBrc3P63N9vN0IZ3fooOAtT+L2oehCxq1C3AjgwTTmrx9VvGJlfbPZfgqgodH4qiFOudMwBtrd6H2YSRS3mTaXxgkmRxcqqo6r9KvD84HE2yi9mE4wvfmkUU633VrFj5X1QPWfLIny2oJGvhu5a2NpU42HxZ/TpvLz9LO8LOJe5LbZq4Yt7XqQjFzebDW96f2XSyChn5EpXzxSrOg0XEYizPHReMUaGfZLTWmreG/FWPB7/aq88osvy8HBWv8I9R+i03Q2J2AzwBjDJKfCIwlpxTNbiw/R5u9Py2+pxff1ceWFZ/ypVi41dS1qzvVdbRljmq30LPtnx9frdXgY1t/fqH9Eu/vbTtVGy2fJs9DgsCNUFjjO1H7LXZBo88B8gw6IVXkF03T5rLTi4asyLIzdL71JPjvxawRgDV9NrW/SAUJmKESfISxIGwH1vIMal+RS3lryvEbt82gUwShGfBoMKxlalvxkPLMfbVKy5lpQhbB2v0fJabeVpCQnYFvq5TvBhNSCdbslcDO1D5iKeWtTsPTV2RYLiQFrFWsWTF1NSnvU9h3AZNBpwlCNbBGsVaz90mrESnP3P+tZLZc4Aua+nwlpq5fkLTpSr5zC/zAmoz/7uo0CRJ4PGAw6ExBQLAWj6f2RSoEiTwE6GPQqUK26QUOofZDqgQJ/QCwkkHnCtlkOfA+ah+kUpDYfZXs5xbiBw8f3Je6/lMtSPBuwM9URo9ZEmIFa+xuxf1erTQJkn0xMM6g84V0grV1EXWdZ07KW19+KLCeQREI6QJrCmuLusyzK0j+fsAjDIpBSAfzgf2o61o0aetKtYtUCq/vFWLjDeXVkKwk4yTlDc0PBl5mUCRCsngJ+JCSoTdfQee8TXm7bWQpqlALrBGslbdR160ooKCzDlPeogLq4hF4grVxGHWdihoQdNyewO1KTmYR3gRr4XpgT+r6FDUh5b17H6fk3VvwauBYJe/S6ZHyTme5FtjEoMCEeNnk9306787KupT39P4n4CcMik2IhzuB9yt5SmdD0NFHAE8oOV8tjWCfPgkcTl1nIgIpb2HLkcBCMXgqsP2+/LSShSYiKIJdgZOARQyKU2iMRX4f7kpdTyJmgqKYDJwBvMKgUIVgvOL32WTq+hExl/IuL/gc0KLkGzhHLL9vsI/kPG9RfYKimQIcpbxJNupiFjye9PtkCnV9iFIg5S1R/ZHyLjOnLu6sMeTnXg4SFEUj5T3FZytvFVOBQdGnlYKf428peTqL4pLyJtoOAK4CuhgYIS2s8XOKuZUJMRGdlPe5DN/7cEXbagbmSBqr/dxhDuVzlYiflLfo5UDlrU1equQWk3IYfm4wRwcpWUwiSpKgYKcqb0g5E5invGFmFm8RNf22Yw6+7udkKnX/iEShCIp5H+BE5V29+jjQz8B0UdHvt/G7fpv3oc6/SBSblHe7yWeBm5U3C7xBJev6YOXHjOeG3QRMU3Jrhkj0ppT3fr6X8t7RPw9cCvwceEp576Q9yjtNM84NK7b/d/b4MTzlx3SpH+OBfszyniwS1SvlfV7DM9Tx5tGTlXfpOg5z7wIeAv4XeNE3XzcwrKq/z5v+fzNh2Bf9n/Fb/2d+1/87Tvb/zncp+fyUGP0/BAyuuB3TD6wAAAAASUVORK5CYII="
      />
    </defs>
    <style />
    <use id="Background" href="#img1" x="0" y="0" />
  </svg>
);

export default Logo;
