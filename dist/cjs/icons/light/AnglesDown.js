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
var AnglesDown_exports = {};
__export(AnglesDown_exports, {
  default: () => AnglesDown_default
});
module.exports = __toCommonJS(AnglesDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AnglesDownLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M181.282 251.898C187.407 257.367 196.594 257.367 202.719 251.898L362.71 107.888C369.272 101.982 369.803 91.857 363.897 85.295C357.96 78.746 347.866 78.23 341.272 84.107L192.001 218.474L42.729 84.107C36.499 78.511 26.376 78.377 20.104 85.295C14.198 91.857 14.729 101.982 21.292 107.888L181.282 251.898ZM341.272 276.107L192.001 410.474L42.729 276.107C36.499 270.512 26.376 270.377 20.104 277.295C14.198 283.857 14.729 293.982 21.292 299.888L181.282 443.898C187.407 449.367 196.594 449.367 202.719 443.898L362.71 299.888C369.272 293.982 369.803 283.857 363.897 277.295C357.96 270.746 347.866 270.23 341.272 276.107Z" })
  }
));
AnglesDownLight.displayName = "AnglesDownLight";
var AnglesDown_default = AnglesDownLight;
