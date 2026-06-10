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
var InboxIn_exports = {};
__export(InboxIn_exports, {
  default: () => InboxIn_default
});
module.exports = __toCommonJS(InboxIn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InboxInLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M244.688 315.312C247.812 318.438 251.906 320 256 320S264.188 318.438 267.312 315.312L379.312 203.312C385.562 197.062 385.562 186.937 379.312 180.688S362.937 174.438 356.688 180.688L272 265.375V16C272 7.156 264.844 0 256 0S240 7.156 240 16V265.375L155.312 180.688C149.062 174.438 138.937 174.438 132.688 180.688S126.438 197.063 132.688 203.312L244.688 315.312ZM464 320H383.998C377.938 320 372.398 323.424 369.688 328.844L342.109 384H169.891L142.314 328.846C139.604 323.424 134.062 320 128 320H48C21.49 320 0 341.49 0 368V464C0 490.51 21.49 512 48 512H464C490.51 512 512 490.51 512 464V368C512 341.49 490.51 320 464 320ZM480 464C480 472.836 472.838 480 464 480H48C39.164 480 32 472.836 32 464V368C32 359.164 39.164 352 48 352H118.109L145.688 407.156C148.398 412.576 153.938 416 159.998 416H352C358.062 416 363.604 412.576 366.314 407.154L393.891 352H464C472.838 352 480 359.164 480 368V464Z" })
  }
));
InboxInLight.displayName = "InboxInLight";
var InboxIn_default = InboxInLight;
