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
var DownLeftAndUpRightToCenter_exports = {};
__export(DownLeftAndUpRightToCenter_exports, {
  default: () => DownLeftAndUpRightToCenter_default
});
module.exports = __toCommonJS(DownLeftAndUpRightToCenter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DownLeftAndUpRightToCenterRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488.961 23.031C479.586 13.656 464.398 13.656 455.023 23.031L373.648 104.406L326.619 57.379C320.492 51.262 312.322 48.027 303.99 48.027C299.873 48.027 295.715 48.82 291.746 50.441C279.777 55.395 271.996 67.066 271.996 80V216C271.996 229.254 282.74 240 295.996 240H431.994C444.932 240 456.619 232.203 461.557 220.25C466.525 208.281 463.775 194.531 454.619 185.375L407.586 138.344L488.961 56.969C498.336 47.594 498.336 32.406 488.961 23.031ZM215.996 272.004H79.998C67.061 272.004 55.373 279.801 50.436 291.754C45.467 303.723 48.217 317.473 57.373 326.629L104.406 373.66L23.031 455.035C13.656 464.41 13.656 479.598 23.031 488.973S47.594 498.348 56.969 488.973L138.344 407.598L185.373 454.625C191.5 460.742 199.67 463.977 208.002 463.977C212.119 463.977 216.277 463.184 220.246 461.562C232.215 456.609 239.996 444.938 239.996 432.004V296.004C239.996 282.75 229.252 272.004 215.996 272.004Z" })
  }
));
DownLeftAndUpRightToCenterRegular.displayName = "DownLeftAndUpRightToCenterRegular";
var DownLeftAndUpRightToCenter_default = DownLeftAndUpRightToCenterRegular;
