var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var BoxHeart_exports = {};
__export(BoxHeart_exports, {
  default: () => BoxHeart_default
});
module.exports = __toCommonJS(BoxHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxHeartLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M214.078 411.869C219.578 417.369 228.328 417.369 233.828 411.869L318.578 326.244C343.203 301.369 341.703 260.244 314.203 237.244C300.328 225.619 266.578 208.744 224.078 251.744C181.453 208.744 147.703 225.619 133.828 237.244C106.328 260.244 104.953 301.369 129.578 326.244L214.078 411.869ZM154.203 261.744C167.953 250.244 185.453 258.369 192.703 265.494L224.078 297.244L255.453 265.494C262.578 258.244 280.078 250.244 293.828 261.744C308.203 273.744 306.203 293.369 295.953 303.744L223.953 376.369L152.203 303.744C141.828 293.369 139.828 273.744 154.203 261.744ZM442.932 162.084L391.148 58.529C383.018 42.27 366.398 32 348.219 32H99.781C81.596 32 64.973 42.273 56.84 58.539L5.066 162.086C1.734 168.75 0 176.098 0 183.547V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V183.547C448 176.096 446.266 168.748 442.932 162.084ZM240 64H348.219C354.344 64 359.812 67.375 362.531 72.844L406.109 160H240V64ZM85.469 72.828C88.188 67.375 93.656 64 99.781 64H208V160H41.889L85.469 72.828ZM416 416C416 433.674 401.674 448 384 448H64C46.326 448 32 433.674 32 416V192H416V416Z" })
  }
));
BoxHeartLight.displayName = "BoxHeartLight";
var BoxHeart_default = BoxHeartLight;
