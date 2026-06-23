import plotly.graph_objects as go
import numpy as np
import os

w = np.linspace(-20, 20, 100)
b = np.linspace(-20, 20, 100)
W, B = np.meshgrid(w, b)
J = (W - 2)**2 + (B + 5)**2

fig = go.Figure(data=[go.Surface(z=J, x=B, y=W, colorscale='Plasma', opacity=0.95, contours=dict(
    z=dict(show=True, usecolormap=True, project_z=True, highlightcolor="white")
))])

fig.update_layout(
    title=dict(
        text='<b>Cost Function J(w, b)</b><br><span style="font-size:14px;color:#a1a1aa">Interactive 3D Optimization Landscape (Drag to rotate)</span>',
        font=dict(family='Outfit, sans-serif', color='white', size=26),
        x=0.5,
        y=0.95
    ),
    autosize=True,
    scene=dict(
        xaxis_title=dict(text='<b>Bias (b)</b>', font=dict(family='Inter, sans-serif', size=16, color='#a855f7')),
        yaxis_title=dict(text='<b>Weight (w)</b>', font=dict(family='Inter, sans-serif', size=16, color='#3b82f6')),
        zaxis_title=dict(text='<b>Cost J(w, b)</b>', font=dict(family='Inter, sans-serif', size=16, color='#f3f4f6')),
        xaxis=dict(gridcolor='#333333', showbackground=False, color='#d1d5db', tickfont=dict(family='Inter, sans-serif', size=12)),
        yaxis=dict(gridcolor='#333333', showbackground=False, color='#d1d5db', tickfont=dict(family='Inter, sans-serif', size=12)),
        zaxis=dict(gridcolor='#333333', showbackground=False, color='#d1d5db', tickfont=dict(family='Inter, sans-serif', size=12)),
        camera=dict(
            eye=dict(x=1.6, y=-1.6, z=1.0)
        )
    ),
    margin=dict(l=20, r=20, b=20, t=80),
    paper_bgcolor='rgba(17,17,17,1)',
    plot_bgcolor='rgba(17,17,17,1)',
)

# Go to the root directory to save to public
os.chdir(os.path.abspath(os.path.join(os.path.dirname(__file__), '../../../../')))

os.makedirs('public/images/blog', exist_ok=True)
fig.write_html('public/images/blog/plot.html', include_plotlyjs='cdn', full_html=True)
