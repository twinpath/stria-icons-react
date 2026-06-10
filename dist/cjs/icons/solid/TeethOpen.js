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
var TeethOpen_exports = {};
__export(TeethOpen_exports, {
  default: () => TeethOpen_default
});
module.exports = __toCommonJS(TeethOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TeethOpenSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 288H64C28.654 288 0 316.652 0 352V384C0 437.02 42.98 480 96 480H480C533.02 480 576 437.02 576 384V352C576 316.652 547.346 288 512 288ZM144 368C144 394.5 122.5 416 96 416S48 394.5 48 368V336C48 327.125 55.125 320 64 320H128C136.875 320 144 327.125 144 336V368ZM272 368C272 394.5 250.5 416 224 416S176 394.5 176 368V336C176 327.125 183.125 320 192 320H256C264.875 320 272 327.125 272 336V368ZM400 368C400 394.5 378.5 416 352 416S304 394.5 304 368V336C304 327.125 311.125 320 320 320H384C392.875 320 400 327.125 400 336V368ZM528 368C528 394.5 506.5 416 480 416S432 394.5 432 368V336C432 327.125 439.125 320 448 320H512C520.875 320 528 327.125 528 336V368ZM480 32H96C42.98 32 0 74.98 0 128V192C0 227.346 28.654 256 64 256H512C547.346 256 576 227.346 576 192V128C576 74.98 533.02 32 480 32ZM144 208C144 216.875 136.875 224 128 224H64C55.125 224 48 216.875 48 208V176C48 149.5 69.5 128 96 128S144 149.5 144 176V208ZM272 210.285C272 217.893 265.893 224 258.285 224H189.715C182.107 224 176 217.893 176 210.285V144C176 117.535 197.535 96 224 96S272 117.535 272 144V210.285ZM400 210.285C400 217.893 393.893 224 386.285 224H317.715C310.107 224 304 217.893 304 210.285V144C304 117.535 325.535 96 352 96S400 117.535 400 144V210.285ZM528 208C528 216.875 520.875 224 512 224H448C439.125 224 432 216.875 432 208V176C432 149.5 453.5 128 480 128S528 149.5 528 176V208Z" })
  }
));
TeethOpenSolid.displayName = "TeethOpenSolid";
var TeethOpen_default = TeethOpenSolid;
