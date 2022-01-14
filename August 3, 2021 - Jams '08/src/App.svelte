<script>

  let songs = [];

  let paused = true;
	let previewTrack = '';
    let preview;
    let url;
    let title;
    let artist;
    let artwork;
    let id;
	
  async function getSongs() {
    let response = await fetch("apple.json");
    songs = await response.json();
  }
  const promise = getSongs();

  const previewAudio = new Audio();

  function playPreview(previewURL, id) {
		previewAudio.src = previewURL;
		previewAudio.currentTime = 0;
		previewAudio.loop = false;
		paused ? (previewAudio.play(), paused = false, previewTrack = id) : (previewAudio.pause(), paused = true, previewTrack = '')
  }

</script>

<main on:load={getSongs}>
  <p>Tap artwork to preview</p>
  <ul>
    {#each songs as song}

	<li>
		<figure id={song.id} class="{previewTrack === song.id ? 'flipped' : ''}" aria-label="Preview {song.title}" style="background-image:url({song.artwork})" on:mousedown={() => playPreview(song.preview, song.id)}></figure>
		<a href={song.url}>
			<h2>{song.title}</h2>
			<h3>{song.artist}</h3>
		</a>
		<a class="button" href={song.url}>View</a>
	</li>
	
    {/each}
  </ul>
</main>

<style>
  :root {
    --divider: #7c7c7c;
  }

  main {
    background: repeating-linear-gradient(
      90deg,
      #c5ccd4,
      #c5ccd4 10px,
      #cbd2d8 10px,
      #cbd2d8 14px
    );
	padding: 2rem 0;
  }

  ul {
    width: clamp(300px, 93.75vw, 768px);
    margin: 0 auto;
    overflow: hidden;
    border-radius: 8px;

    background-color: white;
	border: 1px solid var(--divider);

    counter-reset: section;
  }

  ul li:last-child {
		border-bottom: none;
  }

  p {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 17px;
    font-weight: bold;
    color: #4c566b;
    text-shadow: 0 1px 0 white, 0 -1px 0 rgb(0 0 0 / 10%);
  }
	
	h2 {
		font-weight: 600;
		font-size: 15px;
		
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;  
		overflow: hidden;
		text-overflow: ellipsis;
	}
	h2::before {
		counter-increment: section;
		content: counter(section) ". ";
	}
	h3 {
		font-weight: 500;
		font-size: 14px;
		color: rgba(0,0,0,0.55);

		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;  
		overflow: hidden;
		text-overflow: ellipsis;
	}

	a { text-decoration: none; color: inherit; margin-right: auto; }

	li {
		display: flex;
		align-items: center;
		border-bottom: solid 1px var(--divider);
	}
	figure {
		background-size: cover;
		background-repeat: no-repeat;
		aspect-ratio: 1/1;
		width: 56pt;
		height: 56pt;
		margin-right: 1rem;
		border-left: solid 0px rgb(0 0 0 / 0%);
		transition: 1s;
	}

	figure.flipped {
		transform: rotateY(180deg);
		background-image: url("../playpause.png")!important;
		border-left: solid 1px var(--divider);
	}

	.button {
		margin: 0 1rem;
		padding: 0.3em 0.5em;
		color: white;
		background-image: linear-gradient(180deg, #aab9cc, #7186a1);
		border: inset 1px rgba(0,0,0,0.2);
		box-shadow: inset 0px 1px 2px rgb(0 0 0 / 30%);
		border-radius: 4px;
		text-transform: uppercase;
	}
</style>
