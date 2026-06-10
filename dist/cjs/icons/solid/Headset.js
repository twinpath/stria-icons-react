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
var Headset_exports = {};
__export(Headset_exports, {
  default: () => Headset_default
});
module.exports = __toCommonJS(Headset_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadsetSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 224.062C192 206.344 177.656 192 160 192H144C108.656 192 80 220.703 80 256.125V303.875C80 339.297 108.656 368 144 368H160C177.656 368 192 353.641 192 335.938V224.062ZM256 0C112.906 0 4.562 119.125 0 256V296C0 309.255 10.745 320 24 320H24C37.255 320 48 309.255 48 296V256C48 141.328 141.344 48.203 256 48.188C370.656 48.203 464 141.328 464 256V400C464 422.091 446.091 440 424 440H313.344C305.029 425.711 289.723 416 272 416L241.778 416C218.566 416 197.287 431.696 192.914 454.492C187.028 485.171 210.381 512 240 512H272C289.723 512 305.029 502.289 313.344 488H424C472.601 488 512 448.601 512 400V256C507.438 119.125 399.094 0 256 0ZM368 368C403.344 368 432 339.297 432 303.875V256.125C432 220.703 403.344 192 368 192H352C334.344 192 320 206.359 320 224.062V335.938C320 353.656 334.344 368 352 368H368Z" })
  }
));
HeadsetSolid.displayName = "HeadsetSolid";
var Headset_default = HeadsetSolid;
