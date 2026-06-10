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
var GolfBallTee_exports = {};
__export(GolfBallTee_exports, {
  default: () => GolfBallTee_default
});
module.exports = __toCommonJS(GolfBallTee_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GolfBallTeeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 336H96C89.266 336 83.25 340.219 80.953 346.562C78.656 352.875 80.578 359.969 85.75 364.281L176 439.492V496C176 504.844 183.156 512 192 512S208 504.844 208 496V439.492L298.25 364.281C303.422 359.969 305.344 352.875 303.047 346.563C300.75 340.219 294.734 336 288 336ZM192 411.188L140.188 368H243.812L192 411.188ZM192 304C218.469 304 240 282.469 240 256C240 247.156 232.844 240 224 240S208 247.156 208 256C208 264.812 200.828 272 192 272C183.156 272 176 279.156 176 288S183.156 304 192 304ZM192 0C90.547 0 8 82.531 8 184C8 225.25 22 264.656 48.484 297.969C53.953 304.844 64.016 306.031 70.953 300.531C77.875 295.031 79.016 284.969 73.516 278.031C51.594 250.469 40 217.938 40 184C40 100.188 108.188 32 192 32S344 100.188 344 184C344 217.938 332.406 250.469 310.484 278.031C304.984 284.969 306.125 295.031 313.047 300.531C315.984 302.875 319.5 304 322.984 304C327.703 304 332.359 301.938 335.516 297.969C362 264.656 376 225.25 376 184C376 82.531 293.453 0 192 0ZM192 208C218.469 208 240 186.469 240 160C240 151.156 232.844 144 224 144S208 151.156 208 160C208 168.812 200.828 176 192 176C183.156 176 176 183.156 176 192S183.156 208 192 208ZM304 176C295.156 176 288 183.156 288 192C288 200.812 280.828 208 272 208C263.156 208 256 215.156 256 224S263.156 240 272 240C298.469 240 320 218.469 320 192C320 183.156 312.844 176 304 176Z" })
  }
));
GolfBallTeeLight.displayName = "GolfBallTeeLight";
var GolfBallTee_default = GolfBallTeeLight;
