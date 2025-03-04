var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i234 = root || request.c( 'UnityEngine.JointSpring' )
  var i235 = data
  i234.spring = i235[0]
  i234.damper = i235[1]
  i234.targetPosition = i235[2]
  return i234
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i236 = root || request.c( 'UnityEngine.JointMotor' )
  var i237 = data
  i236.m_TargetVelocity = i237[0]
  i236.m_Force = i237[1]
  i236.m_FreeSpin = i237[2]
  return i236
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i238 = root || request.c( 'UnityEngine.JointLimits' )
  var i239 = data
  i238.m_Min = i239[0]
  i238.m_Max = i239[1]
  i238.m_Bounciness = i239[2]
  i238.m_BounceMinVelocity = i239[3]
  i238.m_ContactDistance = i239[4]
  i238.minBounce = i239[5]
  i238.maxBounce = i239[6]
  return i238
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i240 = root || request.c( 'UnityEngine.JointDrive' )
  var i241 = data
  i240.m_PositionSpring = i241[0]
  i240.m_PositionDamper = i241[1]
  i240.m_MaximumForce = i241[2]
  i240.m_UseAcceleration = i241[3]
  return i240
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i242 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i243 = data
  i242.m_Spring = i243[0]
  i242.m_Damper = i243[1]
  return i242
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i244 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i245 = data
  i244.m_Limit = i245[0]
  i244.m_Bounciness = i245[1]
  i244.m_ContactDistance = i245[2]
  return i244
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i246 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i247 = data
  i246.m_ExtremumSlip = i247[0]
  i246.m_ExtremumValue = i247[1]
  i246.m_AsymptoteSlip = i247[2]
  i246.m_AsymptoteValue = i247[3]
  i246.m_Stiffness = i247[4]
  return i246
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i248 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i249 = data
  i248.m_LowerAngle = i249[0]
  i248.m_UpperAngle = i249[1]
  return i248
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i250 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i251 = data
  i250.m_MotorSpeed = i251[0]
  i250.m_MaximumMotorTorque = i251[1]
  return i250
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i252 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i253 = data
  i252.m_DampingRatio = i253[0]
  i252.m_Frequency = i253[1]
  i252.m_Angle = i253[2]
  return i252
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i254 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i255 = data
  i254.m_LowerTranslation = i255[0]
  i254.m_UpperTranslation = i255[1]
  return i254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i257 = data
  i256.name = i257[0]
  i256.width = i257[1]
  i256.height = i257[2]
  i256.mipmapCount = i257[3]
  i256.anisoLevel = i257[4]
  i256.filterMode = i257[5]
  i256.hdr = !!i257[6]
  i256.format = i257[7]
  i256.wrapMode = i257[8]
  i256.alphaIsTransparency = !!i257[9]
  i256.alphaSource = i257[10]
  i256.graphicsFormat = i257[11]
  i256.sRGBTexture = !!i257[12]
  i256.desiredColorSpace = i257[13]
  i256.wrapU = i257[14]
  i256.wrapV = i257[15]
  return i256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i259 = data
  i258.name = i259[0]
  i258.width = i259[1]
  i258.height = i259[2]
  i258.anisoLevel = i259[3]
  i258.filterMode = i259[4]
  i258.hdr = !!i259[5]
  i258.colorFormat = i259[6]
  i258.depthStencilFormat = i259[7]
  i258.renderTextureFormat = i259[8]
  i258.depth = i259[9]
  i258.wrapU = i259[10]
  i258.wrapV = i259[11]
  return i258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i261 = data
  i260.name = i261[0]
  i260.index = i261[1]
  i260.startup = !!i261[2]
  return i260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i263 = data
  i262.position = new pc.Vec3( i263[0], i263[1], i263[2] )
  i262.scale = new pc.Vec3( i263[3], i263[4], i263[5] )
  i262.rotation = new pc.Quat(i263[6], i263[7], i263[8], i263[9])
  return i262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i265 = data
  i264.enabled = !!i265[0]
  i264.aspect = i265[1]
  i264.orthographic = !!i265[2]
  i264.orthographicSize = i265[3]
  i264.backgroundColor = new pc.Color(i265[4], i265[5], i265[6], i265[7])
  i264.nearClipPlane = i265[8]
  i264.farClipPlane = i265[9]
  i264.fieldOfView = i265[10]
  i264.depth = i265[11]
  i264.clearFlags = i265[12]
  i264.cullingMask = i265[13]
  i264.rect = i265[14]
  request.r(i265[15], i265[16], 0, i264, 'targetTexture')
  i264.usePhysicalProperties = !!i265[17]
  i264.focalLength = i265[18]
  i264.sensorSize = new pc.Vec2( i265[19], i265[20] )
  i264.lensShift = new pc.Vec2( i265[21], i265[22] )
  i264.gateFit = i265[23]
  i264.commandBufferCount = i265[24]
  i264.cameraType = i265[25]
  return i264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i267 = data
  i266.name = i267[0]
  i266.tagId = i267[1]
  i266.enabled = !!i267[2]
  i266.isStatic = !!i267[3]
  i266.layer = i267[4]
  return i266
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i268 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i269 = data
  request.r(i269[0], i269[1], 0, i268, 'm_FirstSelected')
  i268.m_sendNavigationEvents = !!i269[2]
  i268.m_DragThreshold = i269[3]
  return i268
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i270 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i271 = data
  i270.m_HorizontalAxis = i271[0]
  i270.m_VerticalAxis = i271[1]
  i270.m_SubmitButton = i271[2]
  i270.m_CancelButton = i271[3]
  i270.m_InputActionsPerSecond = i271[4]
  i270.m_RepeatDelay = i271[5]
  i270.m_ForceModuleActive = !!i271[6]
  i270.m_SendPointerHoverToParent = !!i271[7]
  return i270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i273 = data
  i272.pivot = new pc.Vec2( i273[0], i273[1] )
  i272.anchorMin = new pc.Vec2( i273[2], i273[3] )
  i272.anchorMax = new pc.Vec2( i273[4], i273[5] )
  i272.sizeDelta = new pc.Vec2( i273[6], i273[7] )
  i272.anchoredPosition3D = new pc.Vec3( i273[8], i273[9], i273[10] )
  i272.rotation = new pc.Quat(i273[11], i273[12], i273[13], i273[14])
  i272.scale = new pc.Vec3( i273[15], i273[16], i273[17] )
  return i272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i275 = data
  i274.enabled = !!i275[0]
  i274.planeDistance = i275[1]
  i274.referencePixelsPerUnit = i275[2]
  i274.isFallbackOverlay = !!i275[3]
  i274.renderMode = i275[4]
  i274.renderOrder = i275[5]
  i274.sortingLayerName = i275[6]
  i274.sortingOrder = i275[7]
  i274.scaleFactor = i275[8]
  request.r(i275[9], i275[10], 0, i274, 'worldCamera')
  i274.overrideSorting = !!i275[11]
  i274.pixelPerfect = !!i275[12]
  i274.targetDisplay = i275[13]
  i274.overridePixelPerfect = !!i275[14]
  return i274
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i276 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i277 = data
  i276.m_UiScaleMode = i277[0]
  i276.m_ReferencePixelsPerUnit = i277[1]
  i276.m_ScaleFactor = i277[2]
  i276.m_ReferenceResolution = new pc.Vec2( i277[3], i277[4] )
  i276.m_ScreenMatchMode = i277[5]
  i276.m_MatchWidthOrHeight = i277[6]
  i276.m_PhysicalUnit = i277[7]
  i276.m_FallbackScreenDPI = i277[8]
  i276.m_DefaultSpriteDPI = i277[9]
  i276.m_DynamicPixelsPerUnit = i277[10]
  i276.m_PresetInfoIsWorld = !!i277[11]
  return i276
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i278 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i279 = data
  i278.m_IgnoreReversedGraphics = !!i279[0]
  i278.m_BlockingObjects = i279[1]
  i278.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i279[2] )
  return i278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i281 = data
  i280.cullTransparentMesh = !!i281[0]
  return i280
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i282 = root || request.c( 'UnityEngine.UI.Image' )
  var i283 = data
  request.r(i283[0], i283[1], 0, i282, 'm_Sprite')
  i282.m_Type = i283[2]
  i282.m_PreserveAspect = !!i283[3]
  i282.m_FillCenter = !!i283[4]
  i282.m_FillMethod = i283[5]
  i282.m_FillAmount = i283[6]
  i282.m_FillClockwise = !!i283[7]
  i282.m_FillOrigin = i283[8]
  i282.m_UseSpriteMesh = !!i283[9]
  i282.m_PixelsPerUnitMultiplier = i283[10]
  request.r(i283[11], i283[12], 0, i282, 'm_Material')
  i282.m_Maskable = !!i283[13]
  i282.m_Color = new pc.Color(i283[14], i283[15], i283[16], i283[17])
  i282.m_RaycastTarget = !!i283[18]
  i282.m_RaycastPadding = new pc.Vec4( i283[19], i283[20], i283[21], i283[22] )
  return i282
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i284 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i285 = data
  request.r(i285[0], i285[1], 0, i284, 'm_Texture')
  i284.m_UVRect = UnityEngine.Rect.MinMaxRect(i285[2], i285[3], i285[4], i285[5])
  request.r(i285[6], i285[7], 0, i284, 'm_Material')
  i284.m_Maskable = !!i285[8]
  i284.m_Color = new pc.Color(i285[9], i285[10], i285[11], i285[12])
  i284.m_RaycastTarget = !!i285[13]
  i284.m_RaycastPadding = new pc.Vec4( i285[14], i285[15], i285[16], i285[17] )
  return i284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.VideoPlayer"] = function (request, data, root) {
  var i286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.VideoPlayer' )
  var i287 = data
  i286.enabled = !!i287[0]
  i286.source = i287[1]
  request.r(i287[2], i287[3], 0, i286, 'clip')
  i286.url = i287[4]
  i286.playOnAwake = !!i287[5]
  i286.isLooping = !!i287[6]
  i286.renderMode = i287[7]
  request.r(i287[8], i287[9], 0, i286, 'targetTexture')
  request.r(i287[10], i287[11], 0, i286, 'targetMaterialRenderer')
  i286.targetMaterialProperty = i287[12]
  i286.playbackSpeed = i287[13]
  return i286
}

Deserializers["DeviceOrientation"] = function (request, data, root) {
  var i288 = root || request.c( 'DeviceOrientation' )
  var i289 = data
  return i288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i291 = data
  request.r(i291[0], i291[1], 0, i290, 'clip')
  request.r(i291[2], i291[3], 0, i290, 'outputAudioMixerGroup')
  i290.playOnAwake = !!i291[4]
  i290.loop = !!i291[5]
  i290.time = i291[6]
  i290.volume = i291[7]
  i290.pitch = i291[8]
  i290.enabled = !!i291[9]
  return i290
}

Deserializers["VideoManager"] = function (request, data, root) {
  var i292 = root || request.c( 'VideoManager' )
  var i293 = data
  i292.indexEC = i293[0]
  request.r(i293[1], i293[2], 0, i292, 'fullVidHorizon')
  request.r(i293[3], i293[4], 0, i292, 'fullVidVertical')
  request.r(i293[5], i293[6], 0, i292, 'ScreenHorizon')
  request.r(i293[7], i293[8], 0, i292, 'ScreenVertical')
  request.r(i293[9], i293[10], 0, i292, 'audioBG')
  request.r(i293[11], i293[12], 0, i292, 'Bg_V')
  return i292
}

Deserializers["CharacterManager"] = function (request, data, root) {
  var i294 = root || request.c( 'CharacterManager' )
  var i295 = data
  request.r(i295[0], i295[1], 0, i294, 'audio')
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i297 = data
  i296.ambientIntensity = i297[0]
  i296.reflectionIntensity = i297[1]
  i296.ambientMode = i297[2]
  i296.ambientLight = new pc.Color(i297[3], i297[4], i297[5], i297[6])
  i296.ambientSkyColor = new pc.Color(i297[7], i297[8], i297[9], i297[10])
  i296.ambientGroundColor = new pc.Color(i297[11], i297[12], i297[13], i297[14])
  i296.ambientEquatorColor = new pc.Color(i297[15], i297[16], i297[17], i297[18])
  i296.fogColor = new pc.Color(i297[19], i297[20], i297[21], i297[22])
  i296.fogEndDistance = i297[23]
  i296.fogStartDistance = i297[24]
  i296.fogDensity = i297[25]
  i296.fog = !!i297[26]
  request.r(i297[27], i297[28], 0, i296, 'skybox')
  i296.fogMode = i297[29]
  var i299 = i297[30]
  var i298 = []
  for(var i = 0; i < i299.length; i += 1) {
    i298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i299[i + 0]) );
  }
  i296.lightmaps = i298
  i296.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i297[31], i296.lightProbes)
  i296.lightmapsMode = i297[32]
  i296.mixedBakeMode = i297[33]
  i296.environmentLightingMode = i297[34]
  i296.ambientProbe = new pc.SphericalHarmonicsL2(i297[35])
  i296.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i297[36])
  i296.useReferenceAmbientProbe = !!i297[37]
  request.r(i297[38], i297[39], 0, i296, 'customReflection')
  request.r(i297[40], i297[41], 0, i296, 'defaultReflection')
  i296.defaultReflectionMode = i297[42]
  i296.defaultReflectionResolution = i297[43]
  i296.sunLightObjectId = i297[44]
  i296.pixelLightCount = i297[45]
  i296.defaultReflectionHDR = !!i297[46]
  i296.hasLightDataAsset = !!i297[47]
  i296.hasManualGenerate = !!i297[48]
  return i296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i303 = data
  request.r(i303[0], i303[1], 0, i302, 'lightmapColor')
  request.r(i303[2], i303[3], 0, i302, 'lightmapDirection')
  return i302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i304 = root || new UnityEngine.LightProbes()
  var i305 = data
  return i304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i312 = root || new pc.UnityMaterial()
  var i313 = data
  i312.name = i313[0]
  request.r(i313[1], i313[2], 0, i312, 'shader')
  i312.renderQueue = i313[3]
  i312.enableInstancing = !!i313[4]
  var i315 = i313[5]
  var i314 = []
  for(var i = 0; i < i315.length; i += 1) {
    i314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i315[i + 0]) );
  }
  i312.floatParameters = i314
  var i317 = i313[6]
  var i316 = []
  for(var i = 0; i < i317.length; i += 1) {
    i316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i317[i + 0]) );
  }
  i312.colorParameters = i316
  var i319 = i313[7]
  var i318 = []
  for(var i = 0; i < i319.length; i += 1) {
    i318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i319[i + 0]) );
  }
  i312.vectorParameters = i318
  var i321 = i313[8]
  var i320 = []
  for(var i = 0; i < i321.length; i += 1) {
    i320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i321[i + 0]) );
  }
  i312.textureParameters = i320
  var i323 = i313[9]
  var i322 = []
  for(var i = 0; i < i323.length; i += 1) {
    i322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i323[i + 0]) );
  }
  i312.materialFlags = i322
  return i312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i327 = data
  i326.name = i327[0]
  i326.value = i327[1]
  return i326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i331 = data
  i330.name = i331[0]
  i330.value = new pc.Color(i331[1], i331[2], i331[3], i331[4])
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i335 = data
  i334.name = i335[0]
  i334.value = new pc.Vec4( i335[1], i335[2], i335[3], i335[4] )
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i339 = data
  i338.name = i339[0]
  request.r(i339[1], i339[2], 0, i338, 'value')
  return i338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i343 = data
  i342.name = i343[0]
  i342.enabled = !!i343[1]
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i345 = data
  var i347 = i345[0]
  var i346 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i347.length; i += 1) {
    i346.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i347[i + 0]));
  }
  i344.ShaderCompilationErrors = i346
  i344.name = i345[1]
  i344.guid = i345[2]
  var i349 = i345[3]
  var i348 = []
  for(var i = 0; i < i349.length; i += 1) {
    i348.push( i349[i + 0] );
  }
  i344.shaderDefinedKeywords = i348
  var i351 = i345[4]
  var i350 = []
  for(var i = 0; i < i351.length; i += 1) {
    i350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i351[i + 0]) );
  }
  i344.passes = i350
  var i353 = i345[5]
  var i352 = []
  for(var i = 0; i < i353.length; i += 1) {
    i352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i353[i + 0]) );
  }
  i344.usePasses = i352
  var i355 = i345[6]
  var i354 = []
  for(var i = 0; i < i355.length; i += 1) {
    i354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i355[i + 0]) );
  }
  i344.defaultParameterValues = i354
  request.r(i345[7], i345[8], 0, i344, 'unityFallbackShader')
  i344.readDepth = !!i345[9]
  i344.isCreatedByShaderGraph = !!i345[10]
  i344.compiled = !!i345[11]
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i359 = data
  i358.shaderName = i359[0]
  i358.errorMessage = i359[1]
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i364 = root || new pc.UnityShaderPass()
  var i365 = data
  i364.id = i365[0]
  i364.subShaderIndex = i365[1]
  i364.name = i365[2]
  i364.passType = i365[3]
  i364.grabPassTextureName = i365[4]
  i364.usePass = !!i365[5]
  i364.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i365[6], i364.zTest)
  i364.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i365[7], i364.zWrite)
  i364.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i365[8], i364.culling)
  i364.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i365[9], i364.blending)
  i364.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i365[10], i364.alphaBlending)
  i364.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i365[11], i364.colorWriteMask)
  i364.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i365[12], i364.offsetUnits)
  i364.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i365[13], i364.offsetFactor)
  i364.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i365[14], i364.stencilRef)
  i364.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i365[15], i364.stencilReadMask)
  i364.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i365[16], i364.stencilWriteMask)
  i364.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i365[17], i364.stencilOp)
  i364.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i365[18], i364.stencilOpFront)
  i364.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i365[19], i364.stencilOpBack)
  var i367 = i365[20]
  var i366 = []
  for(var i = 0; i < i367.length; i += 1) {
    i366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i367[i + 0]) );
  }
  i364.tags = i366
  var i369 = i365[21]
  var i368 = []
  for(var i = 0; i < i369.length; i += 1) {
    i368.push( i369[i + 0] );
  }
  i364.passDefinedKeywords = i368
  var i371 = i365[22]
  var i370 = []
  for(var i = 0; i < i371.length; i += 1) {
    i370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i371[i + 0]) );
  }
  i364.passDefinedKeywordGroups = i370
  var i373 = i365[23]
  var i372 = []
  for(var i = 0; i < i373.length; i += 1) {
    i372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i373[i + 0]) );
  }
  i364.variants = i372
  var i375 = i365[24]
  var i374 = []
  for(var i = 0; i < i375.length; i += 1) {
    i374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i375[i + 0]) );
  }
  i364.excludedVariants = i374
  i364.hasDepthReader = !!i365[25]
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i377 = data
  i376.val = i377[0]
  i376.name = i377[1]
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i379 = data
  i378.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i379[0], i378.src)
  i378.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i379[1], i378.dst)
  i378.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i379[2], i378.op)
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i381 = data
  i380.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i381[0], i380.pass)
  i380.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i381[1], i380.fail)
  i380.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i381[2], i380.zFail)
  i380.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i381[3], i380.comp)
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i385 = data
  i384.name = i385[0]
  i384.value = i385[1]
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i389 = data
  var i391 = i389[0]
  var i390 = []
  for(var i = 0; i < i391.length; i += 1) {
    i390.push( i391[i + 0] );
  }
  i388.keywords = i390
  i388.hasDiscard = !!i389[1]
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i395 = data
  i394.passId = i395[0]
  i394.subShaderIndex = i395[1]
  var i397 = i395[2]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( i397[i + 0] );
  }
  i394.keywords = i396
  i394.vertexProgram = i395[3]
  i394.fragmentProgram = i395[4]
  i394.exportedForWebGl2 = !!i395[5]
  i394.readDepth = !!i395[6]
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i401 = data
  request.r(i401[0], i401[1], 0, i400, 'shader')
  i400.pass = i401[2]
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i405 = data
  i404.name = i405[0]
  i404.type = i405[1]
  i404.value = new pc.Vec4( i405[2], i405[3], i405[4], i405[5] )
  i404.textureValue = i405[6]
  i404.shaderPropertyFlag = i405[7]
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i407 = data
  i406.name = i407[0]
  request.r(i407[1], i407[2], 0, i406, 'texture')
  i406.aabb = i407[3]
  i406.vertices = i407[4]
  i406.triangles = i407[5]
  i406.textureRect = UnityEngine.Rect.MinMaxRect(i407[6], i407[7], i407[8], i407[9])
  i406.packedRect = UnityEngine.Rect.MinMaxRect(i407[10], i407[11], i407[12], i407[13])
  i406.border = new pc.Vec4( i407[14], i407[15], i407[16], i407[17] )
  i406.transparency = i407[18]
  i406.bounds = i407[19]
  i406.pixelsPerUnit = i407[20]
  i406.textureWidth = i407[21]
  i406.textureHeight = i407[22]
  i406.nativeSize = new pc.Vec2( i407[23], i407[24] )
  i406.pivot = new pc.Vec2( i407[25], i407[26] )
  i406.textureRectOffset = new pc.Vec2( i407[27], i407[28] )
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.VideoClip"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.VideoClip' )
  var i409 = data
  i408.name = i409[0]
  i408.width = i409[1]
  i408.height = i409[2]
  i408.frameRate = i409[3]
  i408.frameCount = System.UInt64(i409[4])
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i411 = data
  i410.name = i411[0]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i413 = data
  var i415 = i413[0]
  var i414 = []
  for(var i = 0; i < i415.length; i += 1) {
    i414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i415[i + 0]) );
  }
  i412.files = i414
  i412.componentToPrefabIds = i413[1]
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i419 = data
  i418.path = i419[0]
  request.r(i419[1], i419[2], 0, i418, 'unityObject')
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i421 = data
  var i423 = i421[0]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i423[i + 0]) );
  }
  i420.scriptsExecutionOrder = i422
  var i425 = i421[1]
  var i424 = []
  for(var i = 0; i < i425.length; i += 1) {
    i424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i425[i + 0]) );
  }
  i420.sortingLayers = i424
  var i427 = i421[2]
  var i426 = []
  for(var i = 0; i < i427.length; i += 1) {
    i426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i427[i + 0]) );
  }
  i420.cullingLayers = i426
  i420.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i421[3], i420.timeSettings)
  i420.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i421[4], i420.physicsSettings)
  i420.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i421[5], i420.physics2DSettings)
  i420.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i421[6], i420.qualitySettings)
  i420.enableRealtimeShadows = !!i421[7]
  i420.enableAutoInstancing = !!i421[8]
  i420.enableDynamicBatching = !!i421[9]
  i420.lightmapEncodingQuality = i421[10]
  i420.desiredColorSpace = i421[11]
  var i429 = i421[12]
  var i428 = []
  for(var i = 0; i < i429.length; i += 1) {
    i428.push( i429[i + 0] );
  }
  i420.allTags = i428
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i433 = data
  i432.name = i433[0]
  i432.value = i433[1]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i437 = data
  i436.id = i437[0]
  i436.name = i437[1]
  i436.value = i437[2]
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i441 = data
  i440.id = i441[0]
  i440.name = i441[1]
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i443 = data
  i442.fixedDeltaTime = i443[0]
  i442.maximumDeltaTime = i443[1]
  i442.timeScale = i443[2]
  i442.maximumParticleTimestep = i443[3]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i445 = data
  i444.gravity = new pc.Vec3( i445[0], i445[1], i445[2] )
  i444.defaultSolverIterations = i445[3]
  i444.bounceThreshold = i445[4]
  i444.autoSyncTransforms = !!i445[5]
  i444.autoSimulation = !!i445[6]
  var i447 = i445[7]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i447[i + 0]) );
  }
  i444.collisionMatrix = i446
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i451 = data
  i450.enabled = !!i451[0]
  i450.layerId = i451[1]
  i450.otherLayerId = i451[2]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i453 = data
  request.r(i453[0], i453[1], 0, i452, 'material')
  i452.gravity = new pc.Vec2( i453[2], i453[3] )
  i452.positionIterations = i453[4]
  i452.velocityIterations = i453[5]
  i452.velocityThreshold = i453[6]
  i452.maxLinearCorrection = i453[7]
  i452.maxAngularCorrection = i453[8]
  i452.maxTranslationSpeed = i453[9]
  i452.maxRotationSpeed = i453[10]
  i452.baumgarteScale = i453[11]
  i452.baumgarteTOIScale = i453[12]
  i452.timeToSleep = i453[13]
  i452.linearSleepTolerance = i453[14]
  i452.angularSleepTolerance = i453[15]
  i452.defaultContactOffset = i453[16]
  i452.autoSimulation = !!i453[17]
  i452.queriesHitTriggers = !!i453[18]
  i452.queriesStartInColliders = !!i453[19]
  i452.callbacksOnDisable = !!i453[20]
  i452.reuseCollisionCallbacks = !!i453[21]
  i452.autoSyncTransforms = !!i453[22]
  var i455 = i453[23]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i455[i + 0]) );
  }
  i452.collisionMatrix = i454
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i459 = data
  i458.enabled = !!i459[0]
  i458.layerId = i459[1]
  i458.otherLayerId = i459[2]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i461 = data
  var i463 = i461[0]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i463[i + 0]) );
  }
  i460.qualityLevels = i462
  var i465 = i461[1]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( i465[i + 0] );
  }
  i460.names = i464
  i460.shadows = i461[2]
  i460.anisotropicFiltering = i461[3]
  i460.antiAliasing = i461[4]
  i460.lodBias = i461[5]
  i460.shadowCascades = i461[6]
  i460.shadowDistance = i461[7]
  i460.shadowmaskMode = i461[8]
  i460.shadowProjection = i461[9]
  i460.shadowResolution = i461[10]
  i460.softParticles = !!i461[11]
  i460.softVegetation = !!i461[12]
  i460.activeColorSpace = i461[13]
  i460.desiredColorSpace = i461[14]
  i460.masterTextureLimit = i461[15]
  i460.maxQueuedFrames = i461[16]
  i460.particleRaycastBudget = i461[17]
  i460.pixelLightCount = i461[18]
  i460.realtimeReflectionProbes = !!i461[19]
  i460.shadowCascade2Split = i461[20]
  i460.shadowCascade4Split = new pc.Vec3( i461[21], i461[22], i461[23] )
  i460.streamingMipmapsActive = !!i461[24]
  i460.vSyncCount = i461[25]
  i460.asyncUploadBufferSize = i461[26]
  i460.asyncUploadTimeSlice = i461[27]
  i460.billboardsFaceCameraPosition = !!i461[28]
  i460.shadowNearPlaneOffset = i461[29]
  i460.streamingMipmapsMemoryBudget = i461[30]
  i460.maximumLODLevel = i461[31]
  i460.streamingMipmapsAddAllCameras = !!i461[32]
  i460.streamingMipmapsMaxLevelReduction = i461[33]
  i460.streamingMipmapsRenderersPerFrame = i461[34]
  i460.resolutionScalingFixedDPIFactor = i461[35]
  i460.streamingMipmapsMaxFileIORequests = i461[36]
  i460.currentQualityLevel = i461[37]
  return i460
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.VideoPlayer":{"enabled":0,"source":1,"clip":2,"url":4,"playOnAwake":5,"isLooping":6,"renderMode":7,"targetTexture":8,"targetMaterialRenderer":10,"targetMaterialProperty":12,"playbackSpeed":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.VideoClip":{"name":0,"width":1,"height":2,"frameRate":3,"frameCount":4},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"26":[27],"28":[27],"29":[27],"30":[27],"31":[27],"32":[27],"33":[34],"35":[1],"36":[37],"38":[37],"39":[37],"40":[37],"41":[37],"42":[37],"43":[37],"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[45],"52":[45],"53":[45],"54":[45],"55":[45],"56":[45],"57":[45],"58":[1],"59":[60],"61":[62],"63":[62],"7":[6],"64":[65],"66":[67],"68":[65],"69":[6],"70":[6],"9":[7],"11":[10,6],"71":[6],"8":[7],"72":[6],"73":[6],"74":[6],"75":[6],"76":[6],"77":[6],"78":[6],"79":[6],"80":[6],"13":[10,6],"81":[6],"82":[6],"83":[6],"84":[6],"85":[10,6],"86":[6],"87":[4],"88":[4],"5":[4],"89":[4],"90":[1],"91":[1],"92":[93],"94":[1],"95":[6],"96":[60,6],"97":[6,10],"98":[6],"99":[10,6],"100":[60],"101":[10,6],"102":[6],"103":[65]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.RawImage","UnityEngine.RenderTexture","UnityEngine.Video.VideoPlayer","UnityEngine.Video.VideoClip","UnityEngine.MonoBehaviour","DeviceOrientation","UnityEngine.AudioSource","UnityEngine.AudioClip","VideoManager","UnityEngine.GameObject","CharacterManager","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.41f1";

Deserializers.productName = "KingPin_EC(1)_2101";

Deserializers.lunaInitializationTime = "02/28/2025 08:41:45";

Deserializers.lunaDaysRunning = "3.0";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "HomeIsland_EC_0403_Map1";

Deserializers.lunaAppID = "25626";

Deserializers.projectId = "f9764b7631c968347b71a6067fd79800";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1828";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3760";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "429a1537-8da6-470a-97d0-24edc05edea4";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

