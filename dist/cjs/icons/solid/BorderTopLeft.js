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
var BorderTopLeft_exports = {};
__export(BorderTopLeft_exports, {
  default: () => BorderTopLeft_default
});
module.exports = __toCommonJS(BorderTopLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BorderTopLeftSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 416H208C199.125 416 192 423.125 192 432V464C192 472.875 199.125 480 208 480H240C248.875 480 256 472.875 256 464V432C256 423.125 248.875 416 240 416ZM144 416H112C103.125 416 96 423.125 96 432V464C96 472.875 103.125 480 112 480H144C152.875 480 160 472.875 160 464V432C160 423.125 152.875 416 144 416ZM336 416H304C295.125 416 288 423.125 288 432V464C288 472.875 295.125 480 304 480H336C344.875 480 352 472.875 352 464V432C352 423.125 344.875 416 336 416ZM432 224H400C391.125 224 384 231.125 384 240V272C384 280.875 391.125 288 400 288H432C440.875 288 448 280.875 448 272V240C448 231.125 440.875 224 432 224ZM432 320H400C391.125 320 384 327.125 384 336V368C384 376.875 391.125 384 400 384H432C440.875 384 448 376.875 448 368V336C448 327.125 440.875 320 432 320ZM432 416H400C391.125 416 384 423.125 384 432V464C384 472.875 391.125 480 400 480H432C440.875 480 448 472.875 448 464V432C448 423.125 440.875 416 432 416ZM432 128H400C391.125 128 384 135.125 384 144V176C384 184.875 391.125 192 400 192H432C440.875 192 448 184.875 448 176V144C448 135.125 440.875 128 432 128ZM416 32H64C28.8 32 0 60.8 0 96V448C0 465.673 14.327 480 32 480H32C49.673 480 64 465.673 64 448V96H416C433.673 96 448 81.673 448 64V64C448 46.327 433.673 32 416 32Z" })
  }
));
BorderTopLeftSolid.displayName = "BorderTopLeftSolid";
var BorderTopLeft_default = BorderTopLeftSolid;
