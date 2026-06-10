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
const UserVisorDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M223.943 0C183.693 0 148.227 18.953 124.762 48H323.125C299.66 18.953 264.193 0 223.943 0ZM342.887 174.598C340.584 175.125 338.406 176 335.943 176H111.943C109.48 176 107.303 175.125 105 174.598C123.664 222.184 169.738 256 223.943 256S324.223 222.184 342.887 174.598ZM325.818 369.625C325.193 368.625 324.068 368.125 322.818 368C321.568 368 320.443 368.625 319.693 369.5C299.818 392.5 287.818 422.5 283.943 459C283.818 460.5 284.568 462.125 285.943 462.875C287.443 463.625 289.068 463.5 290.443 462.5C315.193 443.25 324.193 438.75 327.443 437.75C327.943 437.5 328.318 437.375 328.818 437.375C331.068 439.375 336.443 445.125 348.693 462.375C349.443 463.375 350.693 464 351.943 464C352.318 464 352.818 464 353.193 463.875C354.943 463.25 355.943 461.75 355.943 459.875C354.818 424.625 344.693 394.25 325.818 369.625Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 176H336C353.674 176 368 161.672 368 144V80C368 62.326 353.674 48 336 48H112C94.326 48 80 62.326 80 80V144C80 161.672 94.326 176 112 176ZM128 96H320V128H128V96ZM274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 381.602 370.398 304 274.664 304ZM353.25 463.875C352.875 464 352.375 464 352 464C350.75 464 349.5 463.375 348.75 462.375C336.5 445.125 331.125 439.375 328.875 437.375C328.375 437.375 328 437.5 327.5 437.75C324.25 438.75 315.25 443.25 290.5 462.5C289.125 463.5 287.5 463.625 285.999 462.875C284.625 462.125 283.875 460.5 284 459C287.875 422.5 299.875 392.5 319.75 369.5C320.5 368.625 321.625 368 322.875 368C324.125 368.125 325.25 368.625 325.875 369.625C344.75 394.25 354.875 424.625 356 459.875C356 461.75 355 463.25 353.25 463.875Z" })
    ]
  }
));
UserVisorDuotone.displayName = "UserVisorDuotone";
var UserVisor_default = UserVisorDuotone;
