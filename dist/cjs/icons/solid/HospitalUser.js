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
var HospitalUser_exports = {};
__export(HospitalUser_exports, {
  default: () => HospitalUser_default
});
module.exports = __toCommonJS(HospitalUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HospitalUserSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 352.561V48C352 21.49 330.51 0 304 0H48C21.49 0 0 21.49 0 48V480C0 497.673 14.327 512 32 512H296.902C291.389 502.549 288 491.709 288 480C288 427.875 313.303 381.791 352 352.561ZM144 400C144 408.836 136.836 416 128 416H96C87.164 416 80 408.836 80 400V368C80 359.162 87.164 352 96 352H128C136.836 352 144 359.162 144 368V400ZM144 304C144 312.836 136.836 320 128 320H96C87.164 320 80 312.836 80 304V272C80 263.162 87.164 256 96 256H128C136.836 256 144 263.162 144 272V304ZM201.602 183.68C201.602 188.273 197.875 192 193.281 192H158.719C154.125 192 150.398 188.273 150.398 183.68V153.602H120.32C115.727 153.602 112 149.875 112 145.281V110.719C112 106.125 115.727 102.398 120.32 102.398H150.398V72.32C150.398 67.727 154.125 64 158.719 64H193.281C197.875 64 201.602 67.727 201.602 72.32V102.398H231.68C236.273 102.398 240 106.125 240 110.719V145.281C240 149.875 236.273 153.602 231.68 153.602H201.602V183.68ZM272 400C272 408.836 264.836 416 256 416H224C215.164 416 208 408.836 208 400V368C208 359.162 215.164 352 224 352H256C264.836 352 272 359.162 272 368V400ZM272 304C272 312.836 264.836 320 256 320H224C215.164 320 208 312.836 208 304V272C208 263.162 215.164 256 224 256H256C264.836 256 272 263.162 272 272V304ZM512 352H448C377.307 352 320 409.305 320 480C320 497.672 334.326 512 352 512H608C625.674 512 640 497.672 640 480C640 409.305 582.693 352 512 352ZM480 320C533.02 320 576 277.02 576 224S533.02 128 480 128S384 170.98 384 224S426.98 320 480 320Z" })
  }
));
HospitalUserSolid.displayName = "HospitalUserSolid";
var HospitalUser_default = HospitalUserSolid;
