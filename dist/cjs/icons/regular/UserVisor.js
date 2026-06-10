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
var UserVisor_exports = {};
__export(UserVisor_exports, {
  default: () => UserVisor_default
});
module.exports = __toCommonJS(UserVisor_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserVisorRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 381.602 370.398 304 274.664 304ZM48.705 464C55.379 401.133 108.727 352 173.336 352H274.664C339.273 352 392.621 401.133 399.297 464H48.705ZM105.057 174.598C123.721 222.184 169.795 256 224 256S324.279 222.184 342.943 174.598C357.17 171.346 368 159.209 368 144V96C368 78.326 353.674 64 336 64H334.248C312.074 25.9 271.258 0 224 0S135.928 25.9 113.754 64H112C94.326 64 80 78.326 80 96V144C80 159.209 90.83 171.346 105.057 174.598ZM224 208C197.969 208 175.027 195.311 160.408 176H287.592C272.975 195.311 250.033 208 224 208ZM224 48C241.85 48 258.182 54.082 271.506 64H176.494C189.818 54.082 206.15 48 224 48ZM128 112H320V128H128V112ZM309.227 369.354C326.002 389.875 335 415.188 336 444.562C336 446.125 335.111 447.375 333.557 447.895C333.223 448 332.779 448 332.445 448C331.334 448 330.223 447.479 329.557 446.645C318.67 432.27 313.893 427.479 311.893 425.812C311.449 425.812 311.115 425.916 310.672 426.125C307.783 426.957 299.785 430.707 277.789 446.75C276.566 447.582 275.123 447.687 273.789 447.062C272.568 446.437 271.9 445.082 272.012 443.832C275.455 413.416 286.121 388.416 303.783 369.25C304.451 368.52 305.449 368 306.561 368C307.672 368.104 308.672 368.52 309.227 369.354Z" })
  }
));
UserVisorRegular.displayName = "UserVisorRegular";
var UserVisor_default = UserVisorRegular;
