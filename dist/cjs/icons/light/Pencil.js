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
var Pencil_exports = {};
__export(Pencil_exports, {
  default: () => Pencil_default
});
module.exports = __toCommonJS(Pencil_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PencilLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.212 56.262L455.705 18.748C443.21 6.252 426.83 0 410.451 0C394.07 0 377.695 6.25 365.195 18.75L80 303.984L80 303.984L31.037 352.955C28.802 355.189 27.281 358.033 26.66 361.131L0.32 492.854C-1.704 502.967 6.156 512 15.945 512C16.994 512 18.062 511.896 19.144 511.68L150.855 485.336C153.953 484.717 156.796 483.195 159.031 480.963C159.031 480.963 178.531 461.463 207.992 432H208V431.992C300.08 339.908 490.265 149.713 493.302 146.676C518.294 121.684 518.203 81.256 493.212 56.262ZM112 317.238L315.292 113.918L398.05 196.676L194.736 400H112V317.238ZM139.832 454.906L36.404 475.594L57.087 372.158L80 349.242V432H162.736L139.832 454.906ZM470.673 124.049L420.675 174.051L337.916 91.291L387.824 41.377C393.871 35.33 401.906 32 410.451 32S427.031 35.328 433.076 41.373L470.583 78.887C483.058 91.363 483.099 111.623 470.673 124.049Z" })
  }
));
PencilLight.displayName = "PencilLight";
var Pencil_default = PencilLight;
