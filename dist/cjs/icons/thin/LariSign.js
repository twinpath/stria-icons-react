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
var LariSign_exports = {};
__export(LariSign_exports, {
  default: () => LariSign_default
});
module.exports = __toCommonJS(LariSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LariSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 472C384 476.406 380.422 480 376 480H8C3.578 480 0 476.406 0 472S3.578 464 8 464H115.055C46.832 434.053 0 366.85 0 288.469C0 202.088 57.326 128.836 136 104.559V40C136 35.594 139.578 32 144 32S152 35.594 152 40V100.443C165.184 97.592 178.832 96 192.859 96C206.256 96 219.252 97.842 232 100.48V40C232 35.594 235.578 32 240 32S248 35.594 248 40V104.326C306.855 121.854 355.158 166.541 375.578 226.719C377 230.906 374.75 235.438 370.578 236.844C366.359 238.375 361.844 236.062 360.422 231.844C342.219 178.205 299.93 137.766 248 120.791V280C248 284.406 244.422 288 240 288S232 284.406 232 280V116.887C219.293 114.006 206.295 112 192.859 112C178.775 112 165.141 113.826 152 116.945V280C152 284.406 148.422 288 144 288S136 284.406 136 280V121.529C66.328 145.229 16 211.023 16 288.469C16 379.383 84.219 454.803 174.699 464H376C380.422 464 384 467.594 384 472Z" })
  }
));
LariSignThin.displayName = "LariSignThin";
var LariSign_default = LariSignThin;
