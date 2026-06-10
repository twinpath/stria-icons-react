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
var ReplyClock_exports = {};
__export(ReplyClock_exports, {
  default: () => ReplyClock_default
});
module.exports = __toCommonJS(ReplyClock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ReplyClockThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 0C384.471 0 320 64.473 320 144S384.471 288 464 288S608 223.527 608 144S543.529 0 464 0ZM464 272C393.42 272 336 214.578 336 144S393.42 16 464 16S592 73.422 592 144S534.58 272 464 272ZM520 144H464V72C464 67.594 460.406 64 456 64S448 67.594 448 72V152C448 156.406 451.594 160 456 160H520C524.406 160 528 156.406 528 152S524.406 144 520 144ZM522.289 309.984C522.238 310 522.186 310.02 522.135 310.039C517.879 311.539 515.822 316.41 517.654 320.531C524.129 335.109 528 351.047 528 368V440C528 444.406 531.578 448 536 448S544 444.406 544 440V368C544 348.711 539.59 330.582 532.232 314C530.561 310.234 526.174 308.605 522.289 309.984ZM314.002 235.789C312.564 233.453 310.066 231.996 307.322 231.996H61.299L237.266 78.023C240.594 75.117 240.938 70.055 238.016 66.711C235.094 63.398 230.047 63.086 226.734 65.961L34.734 233.965C33 235.496 32 237.684 32 239.996S33 244.496 34.734 246.027L226.734 414.031C228.25 415.344 230.125 416 232 416C234.219 416 236.438 415.062 238.016 413.281C240.938 409.938 240.594 404.875 237.266 401.969L61.299 247.996H307.422C313.625 247.996 317.359 241.234 314.104 235.953C314.068 235.898 314.035 235.844 314.002 235.789Z" })
  }
));
ReplyClockThin.displayName = "ReplyClockThin";
var ReplyClock_default = ReplyClockThin;
