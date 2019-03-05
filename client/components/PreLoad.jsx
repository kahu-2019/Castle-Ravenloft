import React, { Component, Fragment } from 'react'

class PreLoad extends Component {

  render() {
    <div class="hidden">
      <script type="text/javascript">
        <!--//--><![CDATA[//><!--
          var images = new Array()
			function preload() {
				for (i = 0; i < preload.arguments.length; i++) {
          images[i] = new Image()
					images[i].src = preload.arguments[i]
}
}
preload(
"http://domain.tld/gallery/image-001.jpg",
"http://domain.tld/gallery/image-002.jpg",
"http://domain.tld/gallery/image-003.jpg"
)
		//--><!]]>
	</script>
    </div>
  }
}