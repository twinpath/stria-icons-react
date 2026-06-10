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
const HospitalUserDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 352.59V48.029C352 21.519 330.51 0.029 304 0.029H48C21.49 0.029 0 21.519 0 48.029V480.029C0 497.702 14.327 512.029 32 512.029H296.902C291.389 502.578 288 491.738 288 480.029C288 427.904 313.303 381.82 352 352.59ZM144 400.029C144 408.865 136.836 416.029 128 416.029H96C87.164 416.029 80 408.865 80 400.029V368.029C80 359.191 87.164 352.029 96 352.029H128C136.836 352.029 144 359.191 144 368.029V400.029ZM144 304.029C144 312.865 136.836 320.029 128 320.029H96C87.164 320.029 80 312.865 80 304.029V272.029C80 263.191 87.164 256.029 96 256.029H128C136.836 256.029 144 263.191 144 272.029V304.029ZM201.602 183.709C201.602 188.302 197.875 192.029 193.281 192.029H158.719C154.125 192.029 150.398 188.302 150.398 183.709V153.631H120.32C115.727 153.631 112 149.904 112 145.31V110.748C112 106.154 115.727 102.427 120.32 102.427H150.398V72.349C150.398 67.756 154.125 64.029 158.719 64.029H193.281C197.875 64.029 201.602 67.756 201.602 72.349V102.427H231.68C236.273 102.427 240 106.154 240 110.748V145.31C240 149.904 236.273 153.631 231.68 153.631H201.602V183.709ZM272 400.029C272 408.865 264.836 416.029 256 416.029H224C215.164 416.029 208 408.865 208 400.029V368.029C208 359.191 215.164 352.029 224 352.029H256C264.836 352.029 272 359.191 272 368.029V400.029ZM272 304.029C272 312.865 264.836 320.029 256 320.029H224C215.164 320.029 208 312.865 208 304.029V272.029C208 263.191 215.164 256.029 224 256.029H256C264.836 256.029 272 263.191 272 272.029V304.029Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 320.029C533.02 320.029 576 277.049 576 224.029S533.02 128.029 480 128.029S384 171.01 384 224.029S426.98 320.029 480 320.029ZM512 352.029H448C377.307 352.029 320 409.334 320 480.029C320 497.701 334.326 512.029 352 512.029H608C625.674 512.029 640 497.701 640 480.029C640 409.334 582.693 352.029 512 352.029ZM231.68 102.428H201.602V72.35C201.602 67.756 197.875 64.029 193.281 64.029H158.719C154.125 64.029 150.398 67.756 150.398 72.35V102.428H120.32C115.727 102.428 112 106.154 112 110.748V145.311C112 149.904 115.727 153.631 120.32 153.631H150.398V183.709C150.398 188.303 154.125 192.029 158.719 192.029H193.281C197.875 192.029 201.602 188.303 201.602 183.709V153.631H231.68C236.273 153.631 240 149.904 240 145.311V110.748C240 106.154 236.273 102.428 231.68 102.428Z" })
    ]
  }
));
HospitalUserDuotone.displayName = "HospitalUserDuotone";
var HospitalUser_default = HospitalUserDuotone;
