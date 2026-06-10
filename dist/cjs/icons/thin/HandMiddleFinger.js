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
var HandMiddleFinger_exports = {};
__export(HandMiddleFinger_exports, {
  default: () => HandMiddleFinger_default
});
module.exports = __toCommonJS(HandMiddleFinger_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandMiddleFingerThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M376 248C370.469 248 365.078 248.922 360 250.719V248C360 221.531 338.469 200 312 200C299.719 200 288.5 204.641 280 212.25V48C280 21.531 258.469 0 232 0S184 21.531 184 48V212.25C175.5 204.641 164.281 200 152 200C125.531 200 104 221.531 104 248V336C104 340.422 107.578 344 112 344S120 340.422 120 336V248C120 230.359 134.359 216 152 216S184 230.359 184 248V256C184 260.422 187.578 264 192 264S200 260.422 200 256V48C200 30.359 214.359 16 232 16S264 30.359 264 48V256C264 260.422 267.578 264 272 264S280 260.422 280 256V248C280 230.359 294.359 216 312 216S344 230.359 344 248V264C344 266.104 345.693 272.002 351.992 272.002C358.113 272.002 360.877 264 376 264C393.641 264 408 278.359 408 296V384C408 445.75 357.75 496 296 496H174.5C130.047 496 87.594 474.781 60.922 439.234L47.391 421.203C42.625 414.844 40 406.969 40 399.031V346C40 334.703 45.062 324.172 53.625 317.312L84.734 294.453C86.871 292.879 88.002 290.449 88.002 287.99C88.002 282.027 82.572 279.998 79.979 279.998C78.338 279.998 76.686 280.502 75.266 281.547L43.891 304.609C31.25 314.734 24 329.828 24 346V399.031C24 410.422 27.766 421.703 34.594 430.797L48.109 448.828C77.797 488.391 125.047 512 174.5 512H296C366.578 512 424 454.578 424 384V296C424 269.531 402.469 248 376 248Z" })
  }
));
HandMiddleFingerThin.displayName = "HandMiddleFingerThin";
var HandMiddleFinger_default = HandMiddleFingerThin;
