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
var LitecoinSign_exports = {};
__export(LitecoinSign_exports, {
  default: () => LitecoinSign_default
});
module.exports = __toCommonJS(LitecoinSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LitecoinSignSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384.001 440C384.001 462.092 366.093 480 344.001 480H104.005C81.913 480 64.005 462.092 64.005 440V280.137L40.804 286.766C37.866 287.609 34.897 288.016 31.991 288.016C18.069 288.016 5.257 278.844 1.241 264.797C-3.618 247.797 6.225 230.094 23.21 225.234L64.005 213.578V72C64.005 49.906 81.911 32 104.005 32C126.096 32 144.003 49.906 144.003 72V190.721L247.202 161.234C264.233 156.328 281.905 166.219 286.764 183.203C291.624 200.203 281.78 217.906 264.796 222.766L144.003 257.279V400H344.001C366.093 400 384.001 417.908 384.001 440Z" })
  }
));
LitecoinSignSolid.displayName = "LitecoinSignSolid";
var LitecoinSign_default = LitecoinSignSolid;
