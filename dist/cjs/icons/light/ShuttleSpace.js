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
var ShuttleSpace_exports = {};
__export(ShuttleSpace_exports, {
  default: () => ShuttleSpace_default
});
module.exports = __toCommonJS(ShuttleSpace_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShuttleSpaceLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576.834 192.332C533 171.832 474.334 160 416 160H406.891C291.406 109.451 231.129 32 112 32H80C53.49 32 32 53.49 32 80V128C14.326 128 0 142.326 0 160V352C0 369.674 14.326 384 32 384V432C32 458.51 53.49 480 80 480H112C231.129 480 291.406 402.549 406.891 352H416C474.334 352 533 340.166 576.834 319.666C616.334 301.166 640 277.332 640 256C640 234.666 616.334 210.832 576.834 192.332ZM160 69.146C204.258 78.932 240.852 101.711 284.252 128.76C300.318 138.773 317.516 149.459 336.096 160H176.031L176 159.984C171.816 152.797 166.18 147.084 160 142.156V69.146ZM64 80C64 71.178 71.178 64 80 64H112C117.547 64 122.73 64.479 128 64.844V128.936C125.609 128.666 123.324 128 120.875 128H64V80ZM128 447.156C122.73 447.521 117.547 448 112 448H80C71.178 448 64 440.822 64 432V384H120.875C123.324 384 125.609 383.334 128 383.064V447.156ZM284.252 383.24C240.852 410.289 204.258 433.068 160 442.854V369.846C166.189 364.914 171.836 359.197 176.031 352H336.096C317.516 362.541 300.318 373.227 284.252 383.24ZM563.277 290.68C523.436 309.312 469.754 320 416 320H157.594L148.375 335.891C142.5 345.984 132.219 352 120.875 352H32V272H208C216.836 272 224 264.836 224 256C224 247.162 216.836 240 208 240H32V160H120.875C132.219 160 142.5 166.016 148.344 176.094L157.594 192H416C469.758 192 523.438 202.686 563.262 221.311C598.107 237.631 607.547 253.275 608.016 255.727C607.545 258.725 598.105 274.367 563.277 290.68ZM496 224C487.164 224 480 231.162 480 240V272C480 280.836 487.164 288 496 288S512 280.836 512 272V240C512 231.162 504.836 224 496 224Z" })
  }
));
ShuttleSpaceLight.displayName = "ShuttleSpaceLight";
var ShuttleSpace_default = ShuttleSpaceLight;
