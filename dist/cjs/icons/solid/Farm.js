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
var Farm_exports = {};
__export(Farm_exports, {
  default: () => Farm_default
});
module.exports = __toCommonJS(Farm_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FarmSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M221.5 91.136L221.875 90.886C209.595 26.947 144.719 -14.838 78.899 4.945C30.929 19.362 0 66.258 0 116.346L0 480.001C0 497.673 14.327 512 32 512H128V260.507C128 250.56 130.316 240.75 134.764 231.854L190.25 120.885C196.875 107.635 208 97.136 221.5 91.136ZM572.625 246.257L517.125 135.26C513.75 128.635 508.25 123.26 501.5 120.26L381 66.762C372.75 63.137 363.25 63.137 355 66.762L234.5 120.385C227.75 123.385 222.25 128.635 218.875 135.26L163.375 246.257C161.125 250.757 160 255.632 160 260.507V512H288V416.003H448V512H576V260.507C576 255.632 574.875 250.632 572.625 246.257ZM416 320.005H320V224.007H416V320.005Z" })
  }
));
FarmSolid.displayName = "FarmSolid";
var Farm_default = FarmSolid;
