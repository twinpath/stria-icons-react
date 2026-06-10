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
var Angle_exports = {};
__export(Angle_exports, {
  default: () => Angle_default
});
module.exports = __toCommonJS(Angle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AngleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M312.593 384H361.728C354.523 346.818 341.062 311.928 322.661 280.186L282.327 306.113C296.007 330.148 306.277 356.309 312.593 384ZM213.661 224.771C233.052 240.582 250.169 258.986 264.896 279.254L305.312 253.271C285.747 225.893 262.189 201.66 235.48 181.238L213.661 224.771ZM416.009 416H83.79L252.634 78.312C260.54 62.5 254.134 43.281 238.322 35.375C222.509 27.484 203.322 33.875 195.384 49.687L3.384 433.687C-1.585 443.609 -1.053 455.391 4.79 464.828C10.634 474.25 20.915 480 32.009 480H416.009C433.697 480 448.009 465.672 448.009 448S433.697 416 416.009 416Z" })
  }
));
AngleSolid.displayName = "AngleSolid";
var Angle_default = AngleSolid;
