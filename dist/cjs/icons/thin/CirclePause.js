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
var CirclePause_exports = {};
__export(CirclePause_exports, {
  default: () => CirclePause_default
});
module.exports = __toCommonJS(CirclePause_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CirclePauseThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M494.029 224.805C480.552 117.838 394.175 31.455 287.206 17.971C130.218 -1.818 -1.813 130.201 17.97 287.193C31.447 394.162 117.824 480.543 224.792 494.027C381.781 513.818 513.812 381.797 494.029 224.805ZM478.14 285.191C465.464 384.928 384.927 465.463 285.191 478.141C138.874 496.738 15.261 373.125 33.859 226.809C46.535 127.07 127.072 46.535 226.808 33.859C373.124 15.262 496.738 138.873 478.14 285.191ZM191.999 152C187.578 152 183.999 155.578 183.999 160V352C183.999 356.422 187.578 360 191.999 360S199.999 356.422 199.999 352V160C199.999 155.578 196.421 152 191.999 152ZM319.999 152C315.578 152 311.999 155.578 311.999 160V352C311.999 356.422 315.578 360 319.999 360S327.999 356.422 327.999 352V160C327.999 155.578 324.421 152 319.999 152Z" })
  }
));
CirclePauseThin.displayName = "CirclePauseThin";
var CirclePause_default = CirclePauseThin;
